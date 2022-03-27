// in memory database
import {Action} from "./action/action";

class DB {
    public readonly actions: Action[];
    constructor() {
        this.actions = []
    }
}

export default DB