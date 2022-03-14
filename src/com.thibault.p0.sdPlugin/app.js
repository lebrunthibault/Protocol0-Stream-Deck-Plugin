$SD.on('connected', async (event) => {
    console.log(event)
    Action.make_all()
    const p0WebSocket = new WebSocket(Config.P0_WS);
    const res = await fetch(`${Config.P0_URL}/song_state`)
    const song_state = await res.json()
    Action.onSongState(song_state)
    // Action.onTracksNamesUpdate(songData)
    p0WebSocket.onmessage = message => Action.onSongState(JSON.parse(message.data))
})

