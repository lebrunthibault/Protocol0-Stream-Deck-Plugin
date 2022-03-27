import API from "../../api";
import {Action} from "../action";

class ToggleTrackAction extends Action {
    private drum_name: string;
    private index: any;

    constructor(event: SDEvent) {
        super("toggle-track", () => null)
        this.context = event.context
        this.disable()
        this.drum_name = ""
        this.index = event.payload.coordinates.row * 5 + event.payload.coordinates.column
    }

    onWillAppear(_: SDEvent) {
        // we already have the context
    }

    setDrumName(drumName: string) {
        this.drum_name = drumName
        this.setTitle(drumName.replace(" ", "\n"))
        this.enable()
    }

    onKeyUp(event: SDEvent) {
        if (this.enabled && event.context === this.context) {
            console.log("toggle drum " + this.drum_name)
            API.toggleTrack(this.drum_name)
        }
    }
}

export default ToggleTrackAction