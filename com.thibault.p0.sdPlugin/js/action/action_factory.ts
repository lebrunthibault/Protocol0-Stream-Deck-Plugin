import ActionRepository from "./action_repository";
import LoadDrumTrackGroup from "./load_drum_track/load_drum_track_group";
import ToggleTrackGroup from "./toggle_track/toggle_track_group";
import {Action} from "./action";
import API from "../api";

class ActionFactory {
    private readonly actionRepository: any;

    constructor(actionRepository: ActionRepository) {
        this.actionRepository = actionRepository
    }

     createActions() {
         this.actionRepository.save(new Action("play", API.playPause))
         this.actionRepository.save(new Action("drums", API.toggleDrums))
         new LoadDrumTrackGroup(this.actionRepository)
         new ToggleTrackGroup(this.actionRepository)
    }
}

export default ActionFactory

