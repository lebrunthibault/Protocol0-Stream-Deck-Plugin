import 'reflect-metadata'
import { container } from 'tsyringe'
import ActionFactory from './js/action/action_factory'
import ScriptClient from './js/script_client/script_client'
import ActionListeners from "./js/action/action_listeners";

$SD.on('connected', async (_: object) => {
    await initApplication()
})

async function initApplication () {
    container.resolve(ActionFactory).createActions()
    new ActionListeners()
    await container.resolve(ScriptClient).connect()
}
