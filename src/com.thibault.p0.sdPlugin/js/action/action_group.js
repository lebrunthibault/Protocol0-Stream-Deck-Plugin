class ActionGroup {
    /**
     * @param {ActionRepository} actionRepository
     * @param groupName {string}
     * @param actionClass
     */
    constructor(actionRepository, groupName, actionClass) {
        this._actionRepository = actionRepository
        this._actionClass = actionClass
        $SD.on(`com.thibault.p0.${groupName}.willAppear`, (event) => this._onWillAppear(event));
        Bus.subscribe(BusEvents.songState, (songState) => this.onSongState(songState))
    }

    get actions() {
        return this._actionRepository.getActionByClass(this._actionClass)
    }

    _onWillAppear(event) {
        // there are duplicate calls to this ..
        if (this._actionRepository.getActionByContext(event.context)) {
            return
        }

        // noinspection JSUnresolvedVariable
        this._actionRepository.save(new this._actionClass(event.context, event.payload.coordinates))
    }

    onSongState(songState) {
        throw new Error('onSongState not implemented');
    }
}