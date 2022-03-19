// in memory database
class DB {
    constructor() {
        /** @type {[Action]} */
        this.actions = []
        /** @type {ToggleTrackGroup} */
        this.toggleTrackGroup = null
        /** @type {LoadDrumTrackGroup} */
        this.loadDrumTrackGroup = null
        /** @type {SongState} */
        this.songState = null

        Bus.subscribe(BusEvents.songState, (songState) => this.onSongState(songState))
    }

    /**
     * Update all the toggleTrackActions in order
     * For each drum name enable the following actions
     * Disable the ones left
     * @param songState {SongState}
     */
    onSongState(songState) {
        this.songState = songState
    }
}