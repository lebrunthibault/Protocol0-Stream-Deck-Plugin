import 'reflect-metadata';
import { Container } from 'typedi';
import ActionFactory from "./js/action/action_factory";
import ScriptClient from "./js/script_client/script_client";

if (window && (window as any).$SD) {
    $SD.on('connected', async (_: object) => {
        await initApplication()
    })
}

async function initApplication() {
    console.log(Container.get(ActionFactory))
    Container.get(ActionFactory).createActions();
    await Container.get(ScriptClient).connect();
}