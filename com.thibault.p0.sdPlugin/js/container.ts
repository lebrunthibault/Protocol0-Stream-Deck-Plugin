import ActionRepository from "./action/action_repository";
import ActionFactory from "./action/action_factory";
import ScriptClient from "./script_client/script_client";
import DB from "./db";

class Container {
    public readonly actionRepository: ActionRepository;
    public readonly actionFactory: ActionFactory;
    public readonly scriptClient: ScriptClient;

    constructor() {
        const db = new DB()
        this.actionRepository = new ActionRepository(db)
        this.actionFactory = new ActionFactory(this.actionRepository)
        this.scriptClient = new ScriptClient()
    }
}

export default Container