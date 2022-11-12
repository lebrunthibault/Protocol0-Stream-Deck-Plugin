import 'reflect-metadata'
import { container } from 'tsyringe'
import ActionFactory from './js/action/action_factory'
import ScriptClient from './js/script_client/script_client'
import ActionListeners from './js/action/action_listeners'
import DB from './js/service/db'

$SD.on('connected', async (event: object) => {
    await initApplication(event)
})

async function initApplication (event: any) {
    container.resolve(DB).deviceId = event.applicationInfo.devices[0].id

    container.resolve(ActionFactory).createActions()
    container.resolve(ActionListeners).setup()

    await container.resolve(ScriptClient).connect()
}
