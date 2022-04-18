import Config from '../config'
import EventBus from '../event_bus'
import ActionGroupAppearedEvent from '../action/action_group/action_group_appeared_event'
import DrumTrackNamesUpdatedEvent from './drum_track_names_updated_event'
import DrumCategoriesUpdatedEvent from './drum_categories_updated_event'
import { SongState, SongStateSchema } from './song_state'
import FavoriteDeviceNamesUpdatedEvent from './favorite_device_names_updated_event'
import { injectable } from 'tsyringe'
import DrumRackVisibleUpdatedEvent from './drum_rack_visible_updated_event'

@injectable()
class ScriptClient {
    private songState: SongState|null = null

    constructor () {
        EventBus.subscribe(ActionGroupAppearedEvent, (_: ActionGroupAppearedEvent) => this.onActionGroupAppearedEvent())
    }

    async connect () {
        try {
            await this._connect()
            console.log('connected to websocket server')
        } catch (e) {
            console.warn(e)
            const delay = 5000
            console.warn(`scheduling reconnection in ${delay} ms`)
            setTimeout(async () => await this.connect(), delay)
        }
    }

    async _connect () {
        const p0WebSocket = new WebSocket(Config.P0_WS_URL)
        p0WebSocket.onmessage = message => this.onSongState(JSON.parse(message.data))
        p0WebSocket.onclose = _ => this.connect()
    }

    private onSongState (data: any) {
        const songState = SongStateSchema.parse(data)
        console.log('received song state from websocket')
        // console.log(JSON.stringify(songState, null, 4))
        if (!songState) {
            return
        }

        this.songState = songState
        ScriptClient.emitSongState(this.songState)
    }

    private onActionGroupAppearedEvent () {
        console.debug('onActionGroupAppearedEvent')
        if (!this.songState) {
            console.warn('cannot emit null songState')
            return
        }
        ScriptClient.emitSongState(this.songState)
    }

    private static emitSongState (songState: SongState) {
        EventBus.emit(new DrumTrackNamesUpdatedEvent(songState.drum_track_names))
        EventBus.emit(new DrumCategoriesUpdatedEvent(songState.drum_categories))
        EventBus.emit(new FavoriteDeviceNamesUpdatedEvent(songState.favorite_device_names))
        EventBus.emit(new DrumRackVisibleUpdatedEvent(songState.drum_rack_visible))
    }
}

export default ScriptClient
