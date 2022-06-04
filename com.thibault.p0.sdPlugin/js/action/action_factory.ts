/* eslint-disable no-new */

import ActionRepository from './action_repository'
import { Action } from './action'
import API from '../service/api'
import ActionGroup from './action_group/action_group'
import DrumCategoriesUpdatedEvent from '../script_client/event/drum_categories_updated_event'
import DrumTrackNamesUpdatedEvent from '../script_client/event/drum_track_names_updated_event'
import FavoriteDeviceNamesUpdatedEvent from '../script_client/event/favorite_device_names_updated_event'
import Icons from '../service/icons'
import { inject, injectable } from 'tsyringe'
import ActionNameEnum from './action_name_enum'
import ToggleAction from './ToggleAction'
import DrumRackVisibleUpdatedEvent from '../script_client/event/drum_rack_visible_updated_event'
import RoomEqEnabledEvent from '../script_client/event/room_eq_enabled_event'

@injectable()
class ActionFactory {
    /* eslint-disable no-useless-constructor */
    constructor (
        @inject(ActionRepository) private actionRepository: ActionRepository
    ) {
    }

    createActions () {
        new ToggleAction(new Action(
            ActionNameEnum.DRUM_RACK_TO_SIMPLER,
            API.drumRackToSimpler,
            Icons.drumRackToSimpler
        ),
        DrumRackVisibleUpdatedEvent
        )
        new ToggleAction(new Action(
            ActionNameEnum.TOGGLE_ROOM_EQ,
            API.toggleRoomEq,
            Icons.toggleRoomEQEnabled,
            Icons.toggleRoomEQDisabled,
            'Disable\nRoom EQ',
            'Enable\nRoom EQ'
        ),
        RoomEqEnabledEvent
        )
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
