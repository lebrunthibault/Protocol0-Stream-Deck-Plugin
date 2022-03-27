import DB from "../db";
import ToggleTrackAction from "./toggle_track/toggle_track_action";
import {Action} from "./action";
import LoadDrumTrackAction from "./load_drum_track/load_drum_track_action";
import {ActionClass} from "./action_class";

class ActionRepository {
    private readonly db: DB;
    constructor(db: DB) {
        this.db = db
    }

    save(action: Action) {
        this.db.actions.push(action)
        console.log(`saved action ${action}`)
    }

    getActionsByClass<A extends Action>(cls: ActionClass<Action>): A[] {
        let actions = <A[]>this.db.actions.filter((a: Action) => a instanceof cls)

        if (cls === ToggleTrackAction || cls === LoadDrumTrackAction) {
            actions = actions.sort((a: any, b: any) => a.index - b.index)
        }
        return actions
    }

    getActionByContext(context: string): Action|undefined {
        return this.db.actions.find((a: Action) => a.context === context)
    }
}

export default ActionRepository