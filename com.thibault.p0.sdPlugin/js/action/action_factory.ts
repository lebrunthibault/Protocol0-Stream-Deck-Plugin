/* eslint-disable no-new */

import ActionRepository from './action_repository'
import { Action } from './action'
import API from '../service/api'
import ActionGroup from './action_group/action_group'
import DrumCategoriesUpdatedEvent from '../script_client/event/drum_categories_updated_event'
import FavoriteDeviceNamesUpdatedEvent from '../script_client/event/favorite_device_names_updated_event'
import InsertFavoriteDeviceNamesUpdatedEvent from '../script_client/event/insert_favorite_device_names_updated_event'
import Icons from '../service/icons'
import { inject, injectable } from 'tsyringe'
import ActionNameEnum from './action_name_enum'
import ToggleAction from './toggle_action'
import DrumRackVisibleUpdatedEvent from '../script_client/event/drum_rack_visible_updated_event'
import RoomEqEnabledEvent from '../script_client/event/room_eq_enabled_event'
import VocalCategoriesUpdatedEvent from '../script_client/event/vocal_categories_updated_event'
import { AbletonSetsUpdatedEvent } from '../script_client/event/ableton_sets_updated_event'

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
            null,
            Icons.drumRackToSimpler
        ),
        DrumRackVisibleUpdatedEvent
        )
        new ToggleAction(new Action(
            ActionNameEnum.TOGGLE_ROOM_EQ,
            API.toggleRoomEq,
            null,
            Icons.toggleRoomEQEnabled,
            Icons.toggleRoomEQDisabled,
            'Disable\nRoom EQ',
            'Enable\nRoom EQ'
        ),
        RoomEqEnabledEvent
        )
        new ActionGroup(
            this.actionRepository,
            ActionNameEnum.MUTE_SET,
            Icons.set,
            AbletonSetsUpdatedEvent,
            API.muteSet,
            null,
            Icons.muted
        )
        new ActionGroup(
            this.actionRepository,
            ActionNameEnum.LOAD_DRUM_TRACK,
            Icons.newTrack,
            DrumCategoriesUpdatedEvent,
            API.loadDrumSamples
        )
        new ActionGroup(
            this.actionRepository,
            ActionNameEnum.LOAD_VOCAL_TRACK,
            Icons.newTrack,
            VocalCategoriesUpdatedEvent,
            API.loadVocalSamples
        )
        new ActionGroup(
            this.actionRepository,
            ActionNameEnum.DEVICE,
            Icons.device,
            FavoriteDeviceNamesUpdatedEvent,
            API.selectOrLoadDevice,
            API.loadDevice
        )
        new ActionGroup(
            this.actionRepository,
            ActionNameEnum.INSERT_DEVICE,
            Icons.device,
            InsertFavoriteDeviceNamesUpdatedEvent,
            API.selectOrLoadDevice,
            API.loadDevice
        )
        new Action(
            ActionNameEnum.SYNC_SETS,
            API.syncSets,
            API.refreshSets
        )
    }
}

export default ActionFactory
