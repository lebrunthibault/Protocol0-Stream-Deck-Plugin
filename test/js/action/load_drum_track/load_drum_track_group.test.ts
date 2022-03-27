// @ts-ignore
import Container from "../../../../com.thibault.p0.sdPlugin/js/container";
// @ts-ignore
import LoadDrumTrackGroup from "../../../../com.thibault.p0.sdPlugin/js/action/load_drum_track/load_drum_track_group";
import {SDEvent} from "../../../setup";

test('load_drum_track', async () => {
    const container = new Container()
    const loadDrumTrackGroup = new LoadDrumTrackGroup(container.actionRepository)
    for (const i in Array.from(Array(5).keys())) {
        loadDrumTrackGroup.onWillAppear(new SDEvent("test_context " + i, 0, 0))
    }
})
