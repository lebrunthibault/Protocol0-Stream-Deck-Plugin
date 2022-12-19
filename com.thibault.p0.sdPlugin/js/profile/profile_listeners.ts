import EventBus from '../event_bus'
import { inject, injectable } from 'tsyringe'
import DB from '../service/db'
import ActionGroupAppearedEvent from '../action/action_group/action_group_appeared_event'
import ActionPressedEvent from '../action/action_pressed_event'
import { actionTypes, BACK_TO_PREVIOUS_PROFILE } from '../action/action_type'
import ProfileNameEnum from './ProfileNameEnum'

@injectable()
class ProfileListeners {
    constructor (@inject(DB) private readonly db: DB) {
    }

    public setup () {
        EventBus.subscribe(ActionGroupAppearedEvent, (event: ActionGroupAppearedEvent) => this.onActionGroupAppearedEvent(event))
        EventBus.subscribe(ActionPressedEvent, (event: ActionPressedEvent) => this.onActionPressedEvent(event))
    }

    private onActionGroupAppearedEvent (event: ActionGroupAppearedEvent) {
        if (event.actionType.profile) {
            this.db.profileHistory.push(event.actionType.profile)
        }
    }

    private onActionPressedEvent (event: ActionPressedEvent) {
        const actionType = actionTypes.fromName(event.context.name)

        if (actionType.profileAutoSwitch) {
            $SD.api.switchToProfile('', this.db.deviceId, actionType.profileAutoSwitch)
            return
        }

        if (actionType.name === BACK_TO_PREVIOUS_PROFILE) {
            const previousProfile = this.db.profileHistory.getPrevious() || ProfileNameEnum.HOME

            $SD.api.switchToProfile('', this.db.deviceId, previousProfile)
            this.db.profileHistory.clear()
        }
    }
}

export default ProfileListeners
