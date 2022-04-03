// in memory database
import {Action} from "../action/action";
import { Service } from 'typedi';

@Service()
class DB {
    public readonly actions: Action[];
    constructor() {
        this.actions = []
    }
}

export default DB