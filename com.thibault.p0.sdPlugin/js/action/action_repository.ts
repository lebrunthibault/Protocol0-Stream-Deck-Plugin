import DB from "../services/db";
import {Action} from "./action";
import {ActionClass} from "./action_class";
import DynamicAction from "./dynamic_action";

import {inject, injectable } from "tsyringe";

@injectable()
class ActionRepository {
    constructor(@inject(DB) private readonly db: DB) {}

    save(action: Action) {
        this.db.actions.push(action)
        console.log(`saved action ${action}`)
    }

    getActionsByClass<A extends Action>(cls: ActionClass<Action>): A[] {
        return <A[]>this.db.actions.filter((a: Action) => a instanceof cls)
    }

    getDynamicActionByName(name: string): DynamicAction[] {
        return this
            .getActionsByClass<DynamicAction>(DynamicAction).filter((a: Action) => a.name === name)
            .sort((a: DynamicAction, b: DynamicAction) => a.index - b.index)
    }

    getActionByContext(context: string): Action|undefined {
        return this.db.actions.find((a: Action) => a.context === context)
    }
}

export default ActionRepository