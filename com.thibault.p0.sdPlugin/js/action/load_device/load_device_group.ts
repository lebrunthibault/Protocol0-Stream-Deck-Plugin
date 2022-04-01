import ActionGroup from "../action_group/action_group";
import ActionRepository from "../action_repository";
import EventBus from "../../event_bus";
import DrumCategoriesUpdatedEvent from "../../script_client/drum_categories_updated_event";

class LoadDeviceGroup extends ActionGroup<L> {
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

export default LoadDeviceGroup