import ActionRepository from '../action_repository'
import EventBus from '../../event_bus'
import ActionGroupAppearedEvent from './action_group_appeared_event'

import * as _ from 'lodash-es'
import Config from '../../config'
import SongStatePropertyUpdatedEvent from '../../script_client/event/song_state_property_updated_event'
import ActionSlot from './action_slot'
import ActionNameEnum from '../action_name_enum'
import { SontStatePropertyItems } from '../../script_client/event/song_state_property_items'

/**
 * CLass representing handling the creation and update of list of correlated dynamic actions
 * The class instance is bound to a specific SongState property and will update its action list
 * on each SongState update.
 *
 * Thus allowing dynamic action generation on the stream deck, something not possible with the stock script.
 */
class ActionGroup {
    private readonly emitGroupAppearedEvent: Function;
    private readonly isIndexGroup: boolean;
    private parametersItems: SontStatePropertyItems = [];

    constructor (
        private readonly actionRepository: ActionRepository,
        private readonly groupName: ActionNameEnum,
        private readonly icon: string,
        private readonly updateEvent: typeof SongStatePropertyUpdatedEvent,
        private readonly actionFunc: ActionSlotFunction,
        private readonly longPressFunc: ActionSlotFunction|null = null
    ) {
        this.isIndexGroup = groupName === Config.INDEX_ACTION

        this.emitGroupAppearedEvent = _.debounce(() => EventBus.emit(new ActionGroupAppearedEvent()), 10, { leading: false })

        $SD.on(`com.thibault.p0.${groupName}.willAppear`, (event: SDEvent) => this.onWillAppear(event))

        EventBus.subscribe(updateEvent, (event: SongStatePropertyUpdatedEvent) => this.onUpdateEvent(event))
    }

    private get slots (): ActionSlot[] {
        return this.actionRepository.getActionSlotByName(this.groupName)
    }

    /**
     * Each time the action appears, create a dynamic action object
     * Then emit a group appeared event (debounced) so that the song state
     * is emitted, which will configure each dynamic action with a specific parameter
     */
    private onWillAppear (event: SDEvent) {
        // there are duplicate calls to this ..
        if (this.actionRepository.getActionByContext(event.context)) {
            return
        }

        this.actionRepository.save(new ActionSlot(
            event,
            this.groupName,
            this.icon,
            this.actionFunc,
            this.longPressFunc
        ))

        if (!this.isIndexGroup) {
            this.emitGroupAppearedEvent()
        }
    }

    /**
     * The updateEvent is the specific songState update event configured
     * Each time we receive it, we update all actions
     * Action will be enabled or disabled depending on the size of the "event.items" array
     */
    private onUpdateEvent (event: SongStatePropertyUpdatedEvent) {
        if (this.slots.length === 0) {
            return
        }
        console.log(`on update : ${event}`)
        if (_.isEqual(this.parametersItems, event.items)) {
            return
        }

        this.parametersItems = event.items

        const activeSlots = [...this.getSlotsToEnable(this.parametersItems)]
        // NB : we receive parameters in row form or grid form. flattening to row form for further processing.
        const parameters = this.parametersItems.flat()

        // disable unused action slots
        this.slots.filter((slot: ActionSlot) => !activeSlots.includes(slot)).forEach(a => a.disable())

        if (activeSlots.length < parameters.length) {
            console.error(`Got ${parameters.length} parameters to display but only ${activeSlots.length} action slots`)
        }

        activeSlots.forEach((slot: ActionSlot, i: number) => {
            slot.setParameter(parameters[i])
        })
    }

    private * getSlotsToEnable (parameters: string[]|string[][]): Generator<ActionSlot, ActionSlot[]|undefined, undefined> {
        if (parameters.length === 0) {
            return []
        }

        // list of strings
        if (typeof parameters[0] === 'string') {
            yield * this.slots.slice(0, parameters.length)
        } else {
            for (const [i, rowParameters] of parameters.entries()) {
                yield * this.slots.filter((slot: ActionSlot) => slot.row === i).slice(0, rowParameters.length)
            }
        }
    }
}

export default ActionGroup
