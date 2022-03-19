class SongState {
    constructor(track_names, drum_track_names) {
        this.track_names = track_names
        this.drum_track_names = drum_track_names
    }

    /**
     * @param data {Object}
     * @returns {SongState|null}
     */
    static createFromPayload(data) {
        if (!data) {
            console.warn("Received null data protocol0")
            return null
        }

        if (!"drum_track_names" in data || !"track_names" in data) {
            console.error("Missing fields in song_state data")
            console.log(data)
            return null
        }

        return new SongState(data.track_names, data.drum_track_names)
    }
}