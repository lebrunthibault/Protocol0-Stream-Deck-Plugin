import EventBus from '../event_bus'
import ActionPressedEvent from './action_pressed_event'
import { inject, injectable } from 'tsyringe'
import DB from '../service/db'
import ProfileNameEnum from '../profile/ProfileNameEnum'
import ActionNameEnum from './action_name_enum'

@injectable()
class ActionListeners {
    constructor (@inject(DB) private readonly db: DB) {
    }

    public setup () {
        EventBus.subscribe(ActionPressedEvent, (event: ActionPressedEvent) => this.onActionPressedEvent(event))
    }

    private onActionPressedEvent (event: ActionPressedEvent) {
        if (event.context.name === ActionNameEnum.OPEN_SET) {
            $SD.api.switchToProfile('', this.db.deviceId, ProfileNameEnum.DEVICES)
        }
    }
}

export default ActionListeners
