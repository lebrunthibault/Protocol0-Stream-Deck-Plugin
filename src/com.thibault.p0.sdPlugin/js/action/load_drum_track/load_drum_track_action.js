class LoadDrumTrackAction extends Action {
    // noinspection JSUnresolvedVariable
    constructor(context, coordinates) {
        super("load-drum-track", () => null)
        this.context = context
        this.disable()
        this._drum_name = ""
        // noinspection JSUnresolvedVariable
        this.index = coordinates.row * 5 + coordinates.column
    }

    onWillAppear(event) {
        // we already have the context
    }

    setDrumName(drumName) {
        this._drum_name = drumName
        this.setTitle(drumName.replace(" ", "\n"))
        this.enable()
    }

    onKeyUp(event) {
        if (this.enabled && event.context === this.context) {
            API.loadDrumTrack(this._drum_name)
        }
    }
}