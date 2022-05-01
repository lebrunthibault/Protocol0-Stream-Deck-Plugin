import 'reflect-metadata'
import { container } from 'tsyringe'
import ActionFactory from './js/action/action_factory'
import ScriptClient from './js/script_client/script_client'

$SD.on('connected', async (_: object) => {
    await initApplication()
})

async function initApplication () {
    container.resolve(ActionFactory).createActions()
    await container.resolve(ScriptClient).connect()
}
