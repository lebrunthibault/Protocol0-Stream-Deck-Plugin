import ActionDisplay from '../action_display'
import { toStreamDeckTitle } from '../../service/string_utils'
import { ActionSlotItem } from '../../script_client/event/set_state_updated_event'
import ActionPressState from '../action_press_state'

class ActionSlot {
    public readonly name: string;
    public readonly context: string;
    private shown: boolean = true;
    private parameter: ActionSlotItem | null = null;
    public readonly row: number
    public readonly index: number
    public readonly display: ActionDisplay
    private pressState: ActionPressState;

    constructor (
        event: SDEvent,
        name: string,
        icon: string,
        private iconInactive: string,
        private pressFunc: ActionSlotFunction,
        private longPressFunc: ActionSlotFunction | null = null
    ) {
        this.name = name

        this.context = event.context
        this.pressState = new ActionPressState(name, this.onPress.bind(this), this.onLongPress.bind(this), event.context)
        this.display = new ActionDisplay(event.context, icon)
        this.row = event.payload.coordinates.row
        this.index = event.payload.coordinates.row * 8 + event.payload.coordinates.column

        $SD.on(`com.thibault.p0.${name}.willAppear`, (event: SDEvent) => this.onWillAppear(event))

        this.disable()
    }

    toString () {
        return `ActionSlot(name="${this.name}", context=${this.context}, index=${this.index}, parameter="${this.parameter}")`
    }

    private onWillAppear (event: SDEvent) {
        if (this.context !== event.context) {
            return
        }

        // NB : the display update is only effective when the action is visible
        // when slots are updated from another screen, we enable them again when the slot becomes visible
        if (this.shown) {
            this.enable()
        }
    }

    setParameter (parameter: ActionSlotItem) {
        if (parameter !== this.parameter) {
            console.info(`setting parameter "${parameter.label}" for ${this}`)
            this.parameter = parameter
            this.enable()
        }
    }

    protected onPress () {
        console.log(this)
        if (this.shown) {
            // @ts-ignore
            this.pressFunc(this.parameter.value)
        }
    }

    protected onLongPress () {
        const func = this.longPressFunc || this.pressFunc
        if (this.shown) {
            // @ts-ignore
            func(this.parameter.value)
        }
    }

    protected enable () {
        this.shown = true
        // @ts-ignore
        this.display.setTitle(toStreamDeckTitle(this.parameter.label))
        this.display.enabled = true
        // @ts-ignore
        if (!this.parameter.active) {
            this.display.setImage(this.iconInactive)
        }
    }

    disable () {
        this.parameter = null
        this.shown = false
        this.display.enabled = false
    }
}

export default ActionSlot
