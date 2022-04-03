import ActionRepository from "../action_repository";
import EventBus from "../../event_bus";
import ActionGroupAppearedEvent from "./action_group_appeared_event";

import * as _ from "lodash-es";
import DynamicAction from "../dynamic_action";
import Config from "../../config";
import SongStatePropertyUpdatedEvent from "../../script_client/song_state_property_updated_event";

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
    private readonly actionFunc: DynamicActionFunction;
    // noinspection JSMismatchedCollectionQueryUpdate
    private parametersItems: string[] = [];

    constructor(
        actionRepository: ActionRepository,
        groupName: string,
        icon: string,
        updateEvent: typeof SongStatePropertyUpdatedEvent,
        actionFunc: DynamicActionFunction
        ) {
        this.actionRepository = actionRepository
        this.isIndexGroup = groupName === Config.INDEX_ACTION
        this.groupName = groupName
        this.icon = icon
        this.updateEvent = updateEvent
        this.actionFunc = actionFunc

        this.emitGroupAppearedEvent = _.debounce(() => EventBus.emit(new ActionGroupAppearedEvent()), 10, {leading: false});

        console.log(`com.thibault.p0.${groupName}.willAppear`)
        $SD.on(`com.thibault.p0.${groupName}.willAppear`, (event: SDEvent) => this.onWillAppear(event));

        EventBus.subscribe(updateEvent, (event: SongStatePropertyUpdatedEvent) => this.onUpdateEvent(event))
    }

    private get actions(): DynamicAction[] {
        return this.actionRepository.getDynamicActionByName(this.groupName)
    }

    /**
     * Each time the action appears, create a dynamic action object
     * Then emit a group appeared event (debounced) so that the song state
     * is emitted, which will configure each dynamic action with a specific parameter
     */
    private onWillAppear(event: SDEvent) {
        // there are duplicate calls to this ..
        console.log("on will appear")
        console.log(event)
        if (this.actionRepository.getActionByContext(event.context)) {
            return
        }
        console.log("ok")

        this.actionRepository.save(new DynamicAction(event, this.groupName, this.icon, this.actionFunc))

        if (!this.isIndexGroup) {
            this.emitGroupAppearedEvent()
        }
    }

    /**
     * The updateEvent is the specific songState update event configured
     * Each time we receive it, we update all actions
     * Action will be enabled or disabled depending on the size of the event.items array
     */
    private onUpdateEvent(event: SongStatePropertyUpdatedEvent) {
        if (this.actions.length === 0) {
            return
        }
        if (this.parametersItems === event.items) {
            return
        }
        this.parametersItems = event.items;
        console.log(this.parametersItems)
        this.actions.forEach(a => a.disable())
        event.items.slice(0, this.actions.length).forEach((name: string, i: number) => {
            this.actions[i].setParameter(name)
        })
    }

}

export default ActionGroup