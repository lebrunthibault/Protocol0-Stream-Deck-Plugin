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

@injectable()
class ActionFactory {
    /* eslint-disable no-useless-constructor */
    constructor (@inject(ActionRepository) private actionRepository: ActionRepository) {
    }

    createActions () {
        this.actionRepository.save(new Action('play', API.playPause))
        this.actionRepository.save(new Action('drums', API.toggleDrums))
        new ActionGroup(
            this.actionRepository,
            'toggle-track',
            Icons.playPause,
            DrumTrackNamesUpdatedEvent,
            API.toggleTrack
        )
        new ActionGroup(
            this.actionRepository,
            'load-drum-track',
            Icons.newTrack,
            DrumCategoriesUpdatedEvent,
            API.loadDrumTrack
        )
        new ActionGroup(
            this.actionRepository,
            'device',
            Icons.device,
            FavoriteDeviceNamesUpdatedEvent,
            API.selectOrLoadDevice,
            API.loadDevice
        )
    }
}

export default ActionFactory
