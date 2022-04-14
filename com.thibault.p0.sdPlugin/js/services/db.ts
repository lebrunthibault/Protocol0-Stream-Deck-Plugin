// in memory database

class DB {
    public readonly actions: ActionInterface[];
    constructor () {
        this.actions = []
    }
}

export default DB
