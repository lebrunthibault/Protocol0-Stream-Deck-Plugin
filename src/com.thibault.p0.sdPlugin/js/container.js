class Container {
    constructor() {
        const db = new DB()
        this.actionRepository = new ActionRepository(db)
        this.actionFactory = new ActionFactory(this.actionRepository)
        this.scriptWebSocket = new ScriptWebSocket()
    }
}