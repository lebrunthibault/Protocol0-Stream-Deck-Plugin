// import API from "../../api";
// import {Action} from "../action";
//
// class ToggleTrackAction extends Action {
//     private drumName: string;
//     private index: any;
//
//     constructor(event: SDEvent) {
//         super("toggle-track", () => null)
//         this.context = event.context
//         this.disable()
//         this.drumName = ""
//         this.index = event.payload.coordinates.row * 5 + event.payload.coordinates.column
//     }
//
//     onWillAppear(_: SDEvent) {
//         // we already have the context
//     }
//
//     setDrumName(drumName: string) {
//         this.drumName = drumName
//         this.setTitle(drumName.replace(" ", "\n"))
//         this.enable()
//     }
//
//     onKeyUp(event: SDEvent) {
//         if (this.enabled && event.context === this.context) {
//             console.log("toggle drum " + this.drumName)
//             API.toggleTrack(this.drumName)
//         }
//     }
// }
//
// export default ToggleTrackAction