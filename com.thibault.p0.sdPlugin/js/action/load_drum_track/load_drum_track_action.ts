import API from "../../api";
import {Action} from "../action";

class LoadDrumTrackAction extends Action {
    private drumName: string;
    private index: any;

    constructor(event: SDEvent) {
        super("load-drum-track", () => null)
        this.context = event.context
        this.disable()
        this.drumName = ""
        // noinspection JSUnresolvedVariable
        this.index = event.payload.coordinates.row * 5 + event.payload.coordinates.column
    }

    onWillAppear(_: SDEvent) {
        // we already have the context
    }

    setDrumName(drumName: string) {
        this.drumName = drumName
        this.setTitle(drumName.replace(" ", "\n"))
        this.enable()
    }

    onKeyUp(event: SDEvent) {
        if (this.enabled && event.context === this.context) {
            console.log("load drum " + this.drumName)
            API.loadDrumTrack(this.drumName)
        }
    }
}

export default LoadDrumTrackAction