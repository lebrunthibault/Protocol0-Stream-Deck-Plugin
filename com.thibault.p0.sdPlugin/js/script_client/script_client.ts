import Config from '../config'
import EventBus from '../event_bus'
import ActionGroupAppearedEvent from '../action/action_group/action_group_appeared_event'
import DrumCategoriesUpdatedEvent from './event/drum_categories_updated_event'
import AbletonSetSchema, { AbletonSet } from './set_state'
import FavoriteDeviceNamesUpdatedEvent from './event/favorite_device_names_updated_event'
import { injectable } from 'tsyringe'
import DrumRackVisibleUpdatedEvent from './event/drum_rack_visible_updated_event'
import RoomEqEnabledEvent from './event/room_eq_enabled_event'
import InsertFavoriteDeviceNamesUpdatedEvent from './event/insert_favorite_device_names_updated_event'
import VocalCategoriesUpdatedEvent from './event/vocal_categories_updated_event'
import ServerStateSchema, { ServerState } from './server_state'
import { AbletonSetsUpdatedEvent } from './event/ableton_sets_updated_event'

interface WebSocketPayload {
    type: string
    data: any
}

@injectable()
class ScriptClient {
    private activeSet: AbletonSet | null = null
    private serverState: ServerState | null = null

    constructor () {
        EventBus.subscribe(ActionGroupAppearedEvent, (_: ActionGroupAppearedEvent) => this.onActionGroupAppearedEvent())
    }

    async connect () {
        try {
            await this._connect()
            console.info('connected to websocket server')
        } catch (e) {
            console.warn(e)
            const delay = 5000
            console.warn(`scheduling reconnection in ${delay} ms`)
            setTimeout(async () => await this.connect(), delay)
        }
    }

    async _connect () {
        const p0WebSocket = new WebSocket(Config.P0_WS_URL)
        // explicit arrow func to keep this binding
        p0WebSocket.onmessage = (data) => this.onWebSocketMessage(data)
        p0WebSocket.onclose = _ => this.connect()
    }

    private onWebSocketMessage (message: any) {
        const data: WebSocketPayload = JSON.parse(message.data)

        console.log(data.type)
        console.log(data.data)
        switch (data.type) {
        case 'SET_STATE':
            this.activeSet = AbletonSetSchema.parse(data.data)
            ScriptClient.emitSet(this.activeSet)
            break
        case 'SERVER_STATE':
            this.serverState = ServerStateSchema.parse(data.data)
            ScriptClient.emitServerState(this.serverState)
            break
        default:
            console.error(`Got unknown web socket payload type: ${data.type}`)
        }
    }

    private onActionGroupAppearedEvent () {
        if (!this.activeSet) {
            console.warn('active set has not been received')
            return
        }
        if (!this.serverState) {
            console.warn('server state has not been received')
            return
        }
        ScriptClient.emitSet(this.activeSet)
        ScriptClient.emitServerState(this.serverState)
    }

    private static emitSet (set: AbletonSet) {
        EventBus.emit(new DrumRackVisibleUpdatedEvent(set.drum_rack_visible))
        EventBus.emit(new RoomEqEnabledEvent(set.room_eq_enabled))
    }

    private static emitServerState (serverState: ServerState) {
        EventBus.emit(new AbletonSetsUpdatedEvent(serverState.sets))
        EventBus.emit(new DrumCategoriesUpdatedEvent(serverState.sample_categories.drums))
        EventBus.emit(new VocalCategoriesUpdatedEvent(serverState.sample_categories.vocals))
        EventBus.emit(new FavoriteDeviceNamesUpdatedEvent(serverState.favorite_device_names))
        EventBus.emit(new InsertFavoriteDeviceNamesUpdatedEvent(serverState.insert_favorite_device_names))
    }
}

export default ScriptClient
