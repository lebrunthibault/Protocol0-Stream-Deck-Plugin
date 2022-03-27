import Config from "../config";
import SongState from "./song_state";
import EventBus from "../event_bus";
import ActionGroupAppearedEvent from "../action/action_group/action_group_appeared_event";
import DrumTrackNamesUpdatedEvent from "./drum_track_names_updated_event";
import DrumCategoriesUpdatedEvent from "./drum_categories_updated_event";
import _ from "lodash-es";

class ScriptClient {
    private songState: SongState|null = null

    constructor() {
        EventBus.subscribe(ActionGroupAppearedEvent, (_: ActionGroupAppearedEvent) => this.onActionGroupAppearedEvent())
    }


    async connect() {
        console.log("connecting to websocket server")
        try {
            await this._connect();
            console.log("connected to websocket server")
        } catch (e) {
            console.warn(e)
            const delay = 5000
            console.warn(`scheduling reconnection in ${delay} ms`)
            setTimeout(async() => await this.connect(), delay)
        }
    }

    async _connect() {
        const p0WebSocket = new WebSocket(Config.P0_WS_URL);
        p0WebSocket.onmessage = message => this.onSongState(JSON.parse(message.data))
        p0WebSocket.onclose = _ => this.connect()
    }

    private onSongState(data: any) {
        console.log("received song state from websocket");
        const songState = SongState.createFromPayload(data)
        if (!songState) {
            return
        }

        if (!this.songState || !_.isEqual(this.songState.drum_track_names, songState.drum_track_names)) {
            EventBus.emit(new DrumTrackNamesUpdatedEvent(songState.drum_track_names))
        }
        if (!this.songState || !_.isEqual(this.songState.drum_categories, songState.drum_categories)) {
            EventBus.emit(new DrumCategoriesUpdatedEvent(songState.drum_categories))
        }
        this.songState = songState
    }

    private onActionGroupAppearedEvent() {
        if (!this.songState) {
            console.warn("cannot emit null songState")
            return
        }
        EventBus.emit(new DrumTrackNamesUpdatedEvent(this.songState.drum_track_names))
        EventBus.emit(new DrumCategoriesUpdatedEvent(this.songState.drum_categories))
    }
}

export default ScriptClient