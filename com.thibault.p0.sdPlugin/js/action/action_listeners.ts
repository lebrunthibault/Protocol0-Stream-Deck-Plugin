import EventBus from "../event_bus";
import ActionPressedEvent from "./action_pressed_event";

class ActionListeners {
    constructor() {
        EventBus.subscribe(ActionPressedEvent, (event: ActionPressedEvent) => ActionListeners.onActionPressedEvent(event))
    }

    private static onActionPressedEvent(event: ActionPressedEvent) {
        console.log("actionpressed event")
        console.log(event)
        console.log(event.action_name)
        // $SD.api.switchToProfile
    }
}

export default ActionListeners
