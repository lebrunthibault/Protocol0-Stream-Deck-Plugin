import ToggleTrackAction from "./toggle_track_action";
import ActionGroup from "../action_group/action_group";
import ActionRepository from "../action_repository";
import DrumTrackNamesUpdatedEvent from "../../script_client/drum_track_names_updated_event";
import EventBus from "../../event_bus";

class ToggleTrackGroup extends ActionGroup<ToggleTrackAction> {
    constructor(actionRepository: ActionRepository) {
        super(actionRepository, "toggle-track", ToggleTrackAction, true)
        EventBus.subscribe(DrumTrackNamesUpdatedEvent, (event: DrumTrackNamesUpdatedEvent) => this.onDrumTrackNamesUpdatedEvent(event))
    }

    /**
     * Update all the toggleTrackActions in order
     * For each drum name enable the following actions
     * Disable the ones left
     */
    private onDrumTrackNamesUpdatedEvent(event: DrumTrackNamesUpdatedEvent) {
        this.actions.forEach(a => a.disable())
        event.drumTrackNames.slice(0, this.actions.length).forEach((name: string, i: number) => {
            this.actions[i].setDrumName(name)
        })
    }
}

export default ToggleTrackGroup