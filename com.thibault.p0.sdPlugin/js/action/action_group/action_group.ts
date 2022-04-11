import ActionRepository from "../action_repository";
import EventBus from "../../event_bus";
import ActionGroupAppearedEvent from "./action_group_appeared_event";

import * as _ from "lodash-es";
import Config from "../../config";
import SongStatePropertyUpdatedEvent from "../../script_client/song_state_property_updated_event";
import ActionSlot from "./action_slot";

/**
 * CLass representing handling the creation and update of list of correlated dynamic actions
 * The class instance is bound to a specific SongState property and will update its action list
 * on each SongState update.
 *
 * Thus allowing dynamic action generation on the stream deck, something not possible with the stock script.
 */
class ActionGroup {
    private readonly actionRepository: ActionRepository;
    private readonly emitGroupAppearedEvent: Function;
    private readonly isIndexGroup: boolean;
    protected readonly groupName: string;
    protected readonly icon: string;
    private readonly updateEvent: typeof SongStatePropertyUpdatedEvent;
    private readonly actionFunc: ActionSlotFunction;
    // noinspection JSMismatchedCollectionQueryUpdate
    private parametersItems: string[] = [];

    constructor(
        actionRepository: ActionRepository,
        groupName: string,
        icon: string,
        updateEvent: typeof SongStatePropertyUpdatedEvent,
        actionFunc: ActionSlotFunction
        ) {
        this.actionRepository = actionRepository
        this.isIndexGroup = groupName === Config.INDEX_ACTION
        this.groupName = groupName
        this.icon = icon
        this.updateEvent = updateEvent
        this.actionFunc = actionFunc

        this.emitGroupAppearedEvent = _.debounce(() => EventBus.emit(new ActionGroupAppearedEvent()), 10, {leading: false});

        $SD.on(`com.thibault.p0.${groupName}.willAppear`, (event: SDEvent) => this.onWillAppear(event));

        EventBus.subscribe(updateEvent, (event: SongStatePropertyUpdatedEvent) => this.onUpdateEvent(event))
    }

    private get slots(): ActionSlot[] {
        return this.actionRepository.getActionSlotByName(this.groupName)
    }

    /**
     * Each time the action appears, create a dynamic action object
     * Then emit a group appeared event (debounced) so that the song state
     * is emitted, which will configure each dynamic action with a specific parameter
     */
    private onWillAppear(event: SDEvent) {
        // there are duplicate calls to this ..
        if (this.actionRepository.getActionByContext(event.context)) {
            return
        }

        this.actionRepository.save(new ActionSlot(event, this.groupName, this.icon, this.actionFunc))

        if (!this.isIndexGroup) {
            this.emitGroupAppearedEvent()
        }
    }

    /**
     * The updateEvent is the specific songState update event configured
     * Each time we receive it, we update all actions
     * Action will be enabled or disabled depending on the size of the "event.items" array
     */
    private onUpdateEvent(event: SongStatePropertyUpdatedEvent) {
        if (this.slots.length === 0) {
            return
        }
        console.log(`on update : ${event}`)
        if (_.isEqual(this.parametersItems, event.items)) {
            return
        }

        this.parametersItems = event.items;
        // disable unused action slots
        this.slots.slice(event.items.length, this.slots.length).forEach(a => a.disable())

        event.items.slice(0, this.slots.length).forEach((name: string, i: number) => {
            this.slots[i].setParameter(name)
        })
    }

}

export default ActionGroup