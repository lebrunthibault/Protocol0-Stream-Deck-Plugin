/* eslint-disable no-unused-vars */

import ProfileNameEnum from '../domain/profile/ProfileNameEnum'

class ActionType {
    constructor (
        public name: string, public profile: ProfileNameEnum | null, public profileAutoSwitch: ProfileNameEnum | null = null
    ) {
    }
}

const BACK_TO_PREVIOUS_PROFILE = 'back-to-previous-profile'

const actionTypes = {
    BACK_TO_PREVIOUS_PROFILE: new ActionType(BACK_TO_PREVIOUS_PROFILE, null),
    DRUM_RACK_TO_SIMPLER: new ActionType('drum-rack-to-simpler', ProfileNameEnum.DRUMS),
    LOAD_DEVICE: new ActionType('load-device', ProfileNameEnum.DEVICES),
    LOAD_GROUPED_DEVICE: new ActionType('load-grouped-device', ProfileNameEnum.DEVICE_GROUP, ProfileNameEnum.DEVICES),
    LOAD_DRUM_TRACK: new ActionType('load-drum-track', ProfileNameEnum.DRUMS),
    LOAD_INSERT_DEVICE: new ActionType('load-insert-device', ProfileNameEnum.INSERT_DEVICES, ProfileNameEnum.DEVICES),
    LOAD_VOCAL_TRACK: new ActionType('load-vocal-track', ProfileNameEnum.VOCALS),
    OPEN_SET: new ActionType('open-set', ProfileNameEnum.HOME, ProfileNameEnum.DEVICES),
    TOGGLE_ROOM_EQ: new ActionType('toggle-room-eq', ProfileNameEnum.HOME),

    fromName (name: string): ActionType {
        for (const key in this) {
            // @ts-ignore
            const type: any = this[key]

            if (type instanceof ActionType && type.name === name) {
                return type
            }
        }

        throw new Error(`Couldn't find action type from ${name}`)
    }
}

export { actionTypes, ActionType, BACK_TO_PREVIOUS_PROFILE }
