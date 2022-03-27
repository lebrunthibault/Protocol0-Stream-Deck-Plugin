class SongState {
    public drum_track_names: string[];
    public drum_categories: string[];

    constructor(drum_track_names: string[], drum_categories: string[]) {
        this.drum_track_names = drum_track_names
        this.drum_categories = drum_categories
    }

    static createFromPayload(data: SongState): SongState|null {
        if (!data) {
            console.warn("Received null data protocol0")
            return null
        }

        if (!("drum_track_names" in data) || !("drum_categories" in data)) {
            console.error("Missing fields in song_state data")
            console.log(data)
            return null
        }

        return new SongState(data.drum_track_names, data.drum_categories)
    }
}

export default SongState