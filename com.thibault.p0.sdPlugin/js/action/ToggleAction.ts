import { Action } from './action'
import EventBus from '../event_bus'
import toBoolean, { toBooleanClass } from '../script_client/event/to_boolean'

class ToggleAction {
    private _enabled: boolean = true;
    constructor (
        private readonly action: Action,
        private readonly updateEventClass: toBooleanClass
    ) {
        EventBus.subscribe(updateEventClass, (event: toBoolean) => this.onUpdateEvent(event))
        $SD.on(`com.thibault.p0.${action.name}.keyUp`, (event: SDEvent) => this.onKeyUp(event))
    }

    get enabled (): boolean {
        return this._enabled
    }

    set enabled (enabled: boolean) {
        this._enabled = enabled
        this.action.display.enabled = enabled
    }

    private onUpdateEvent (event: toBoolean) {
        this.enabled = event.toBool()
    }

    private onKeyUp (_: SDEvent) {
        this.enabled = !this.enabled
    }
}

export default ToggleAction
