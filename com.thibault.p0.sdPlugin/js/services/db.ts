// in memory database

import { singleton } from 'tsyringe'
import ActionInterface from '../action/action_interface'

@singleton()
class DB {
    public readonly actions: ActionInterface[];
    constructor () {
        this.actions = []
    }
}

export default DB
