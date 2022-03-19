class LoadDrumTrackGroup extends ActionGroup {
    /**
     * @param {ActionRepository} actionRepository
     */
    constructor(actionRepository) {
        super(actionRepository, "load-drum-track", LoadDrumTrackAction)
    }

    /**
     * @return {LoadDrumTrackAction[]}
     */
    get actions() {
        // noinspection JSValidateTypes
        return super.actions
    }

    /**
     * Update all the toggleTrackActions in order
     * For each drum name enable the following actions
     * Disable the ones left
     * @param songState {SongState}
     */
    onSongState(songState) {
        this.actions.forEach(a => a.disable())
        songState.drum_track_names.slice(0, this.actions.length).forEach((name, i) => {
            this.actions[i].setDrumName(name)
        })
    }
}