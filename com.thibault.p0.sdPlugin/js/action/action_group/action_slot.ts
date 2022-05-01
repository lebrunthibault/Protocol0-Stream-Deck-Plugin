import ActionDisplay from '../action_display'
import Config from '../../config'
import { toStreamDeckTitle } from '../../service/string_utils'

class ActionSlot {
    public readonly name: string;
    protected readonly actionFunc: ActionSlotFunction;
    protected readonly longPressFunc: ActionSlotFunction|null;
    public readonly context: string;
    private enabled: boolean = true;
    private parameter: string = 'not-set';
    public readonly row: number
    public readonly index: number
    public readonly display: ActionDisplay
    private pressedAt: number|null = null;

    constructor (
        event: SDEvent,
        name: string,
        icon: string,
        actionFunc: ActionSlotFunction,
        longPressFunc: ActionSlotFunction|null = null
    ) {
        this.name = name

        this.actionFunc = actionFunc
        this.longPressFunc = longPressFunc

        this.context = event.context
        this.display = new ActionDisplay(event.context, icon)
        this.row = event.payload.coordinates.row
        this.index = event.payload.coordinates.row * 8 + event.payload.coordinates.column

        $SD.on(`com.thibault.p0.${name}.keyDown`, (event: SDEvent) => this.onKeyDown(event))
        $SD.on(`com.thibault.p0.${name}.keyUp`, (event: SDEvent) => this.onKeyUp(event))
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
        if (this.enabled) {
            this.enable()
        }
    }

    setParameter (parameter: string) {
        if (parameter !== this.parameter) {
            console.log(`setting parameter "${parameter}" for ${this}`)
            this.parameter = parameter
            this.enable()
        }
    }

    private onKeyDown (sdEvent: SDEvent) {
        if (this.context !== sdEvent.context) {
            return
        }
        console.log(`onKeyDown: ${this}`)
        this.pressedAt = performance.now()
    }

    private onKeyUp (sdEvent: SDEvent) {
        if (this.context !== sdEvent.context) {
            return
        }
        if (!this.enabled) {
            console.warn(`action inactive: ${this}`)
            return
        }

        if (!this.pressedAt) {
            console.error('Got Key up without key down')
            return
        }

        const longPress = (performance.now() - this.pressedAt) > Config.LONG_PRESS_THRESHOLD
        this.pressedAt = null

        if (longPress) {
            this.onLongPress()
        } else {
            this.onPress()
        }
    }

    protected onPress () {
        this.actionFunc(this.parameter)
    }

    protected onLongPress () {
        if (this.longPressFunc) {
            this.longPressFunc(this.parameter)
        } else {
            this.actionFunc(this.parameter)
        }
    }

    protected enable () {
        this.enabled = true
        this.display.setTitle(toStreamDeckTitle(this.parameter))
        this.display.enabled = true
    }

    disable () {
        this.enabled = false
        this.display.enabled = false
    }
}

export default ActionSlot
