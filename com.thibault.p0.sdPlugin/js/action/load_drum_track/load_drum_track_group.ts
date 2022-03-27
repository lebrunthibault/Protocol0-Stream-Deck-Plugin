import ActionGroup from "../action_group/action_group";
import ActionRepository from "../action_repository";
import LoadDrumTrackAction from "./load_drum_track_action";
import EventBus from "../../event_bus";
import DrumCategoriesUpdatedEvent from "../../script_client/drum_categories_updated_event";

class LoadDrumTrackGroup extends ActionGroup<LoadDrumTrackAction> {
    constructor(actionRepository: ActionRepository) {
        super(actionRepository, "load-drum-track", LoadDrumTrackAction)
        EventBus.subscribe(DrumCategoriesUpdatedEvent, (event: DrumCategoriesUpdatedEvent) => this.onDrumCategoriesUpdatedEvent(event))
    }

    private onDrumCategoriesUpdatedEvent(event: DrumCategoriesUpdatedEvent) {
        this.actions.forEach(a => a.disable())
        event.drumCategories.slice(0, this.actions.length).forEach((name: string, i: number) => {
            this.actions[i].setDrumName(name)
        })
    }
}

export default LoadDrumTrackGroup