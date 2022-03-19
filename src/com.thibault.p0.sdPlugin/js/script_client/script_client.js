class ScriptWebSocket {
    async connect() {
        try {
            await this._connect();
            console.log("connected to websocket and http server")
        } catch (e) {
            console.warn(e)
            const delay = 5000
            console.log(`scheduling reconnection in ${delay} ms`)
            setTimeout(async() => await this.connect(), delay)
        }
    }

    async _connect() {
        const p0WebSocket = new WebSocket(Config.P0_WS);
        // const res = await fetch(`${Config.P0_URL}/song_state`)
        // const song_state = await res.json()
        // this._onSongState(song_state)
        // Action.onTracksNamesUpdate(songData)
        p0WebSocket.onmessage = message => this._onSongState(JSON.parse(message.data))
    }

    _onSongState(data) {
        const songState = SongState.createFromPayload(data)
        if (!songState) {
            return
        }
        console.log("received song state")
        Bus.dispatch(BusEvents.songState, songState)
    }
}