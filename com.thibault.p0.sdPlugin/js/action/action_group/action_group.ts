import ActionRepository from "../action_repository";
import {Action} from "../action";
import {ActionClass} from "../action_class";
import EventBus from "../../event_bus";
import ActionGroupAppearedEvent from "./action_group_appeared_event";

import _ from "lodash-es";

class ActionGroup<A extends Action> {
    private readonly actionRepository: ActionRepository;
    private readonly actionClass: ActionClass<A>;
    private readonly emitGroupAppearedEvent: Function;
    private readonly isIndexGroup: boolean;

    constructor(actionRepository: ActionRepository, groupName: string, actionClass: ActionClass<A>, isIndexGroup = false) {
        this.actionRepository = actionRepository
        this.actionClass = actionClass
        this.isIndexGroup = isIndexGroup

        this.emitGroupAppearedEvent = _.debounce(() => EventBus.emit(new ActionGroupAppearedEvent()), 10, {leading: false});

        $SD.on(`com.thibault.p0.${groupName}.willAppear`, (event: SDEvent) => this.onWillAppear(event));
    }

    protected get actions(): A[] {
        return this.actionRepository.getActionsByClass(this.actionClass)
    }

    public onWillAppear(event: SDEvent) {
        // there are duplicate calls to this ..
        if (this.actionRepository.getActionByContext(event.context)) {
            return
        }

        this.actionRepository.save(new this.actionClass(event))

        if (!this.isIndexGroup) {
            this.emitGroupAppearedEvent()
        }
    }
}

export default ActionGroup