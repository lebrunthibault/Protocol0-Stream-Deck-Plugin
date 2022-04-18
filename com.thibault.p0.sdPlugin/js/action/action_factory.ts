/* eslint-disable no-new */

import ActionRepository from './action_repository'
import { Action } from './action'
import API from '../services/api'
import ActionGroup from './action_group/action_group'
import DrumCategoriesUpdatedEvent from '../script_client/drum_categories_updated_event'
import DrumTrackNamesUpdatedEvent from '../script_client/drum_track_names_updated_event'
import FavoriteDeviceNamesUpdatedEvent from '../script_client/favorite_device_names_updated_event'
import Icons from '../services/icons'
import { inject, injectable } from 'tsyringe'
import ActionNameEnum from './ActionNameEnum'

@injectable()
class ActionFactory {
    /* eslint-disable no-useless-constructor */
    constructor (
        @inject(ActionRepository) private actionRepository: ActionRepository
    ) {
    }

    createActions () {
        this.actionRepository.save(new Action(
            ActionNameEnum.PLAY_PAYSE,
            API.playPause,
            Icons.playPause
        ))
        this.actionRepository.save(new Action(
            ActionNameEnum.TOGGLE_DRUMS,
            API.toggleDrums,
            Icons.playPause
        ))
        this.actionRepository.save(new Action(
            ActionNameEnum.DRUM_RACK_TO_SIMPLER,
            API.drumRackToSimpler,
            Icons.drumRackToSimpler
        ))
        new ActionGroup(
            this.actionRepository,
            ActionNameEnum.TOGGLE_TRACK,
            Icons.playPause,
            DrumTrackNamesUpdatedEvent,
            API.toggleTrack
        )
        new ActionGroup(
            this.actionRepository,
            ActionNameEnum.LOAD_DRUM_TRACK,
            Icons.newTrack,
            DrumCategoriesUpdatedEvent,
            API.loadDrumRack,
            API.loadDrumTrack
        )
        new ActionGroup(
            this.actionRepository,
            ActionNameEnum.DEVICE,
            Icons.device,
            FavoriteDeviceNamesUpdatedEvent,
            API.selectOrLoadDevice,
            API.loadDevice
        )
    }
}

export default ActionFactory
