import API from "../../api";
import {Action} from "../action";

class LoadDrumTrackAction extends Action {
    private deviceName: string;
    private index: any;

    constructor(event: SDEvent) {
        super("load-drum-track", () => null)
        this.context = event.context
        this.disable()
        this.deviceName = ""
        // noinspection JSUnresolvedVariable
        this.index = event.payload.coordinates.row * 5 + event.payload.coordinates.column
    }

    onWillAppear(_: SDEvent) {
        // we already have the context
    }

    setDeviceName(deviceName: string) {
        this.deviceName = deviceName
        this.setTitle(deviceName.replace(" ", "\n"))
        this.enable()
    }

    onKeyUp(event: SDEvent) {
        if (this.enabled && event.context === this.context) {
            console.log("load drum " + this.deviceName)
            API.loadDrumTrack(this.deviceName)
        }
    }
}

export default LoadDrumTrackAction