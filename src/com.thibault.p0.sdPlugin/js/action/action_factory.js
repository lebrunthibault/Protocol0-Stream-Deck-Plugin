class ActionFactory {
    /**
     * @param {ActionRepository} actionRepository
     */
    constructor(actionRepository) {
        this._actionRepository = actionRepository
    }

     createActions() {
         this._actionRepository.save(new Action("play", API.playPause))
         this._actionRepository.save(new Action("drums", API.toggleDrums))
         new LoadDrumTrackGroup(this._actionRepository)
         new ToggleTrackGroup(this._actionRepository)
    }
}

