import Config from '../config'

class PressState {
    private pressedAt: number | null = null;

    constructor (
        private name: string,
        private pressFunc: Function,
        private longPressFunc: Function | null = null,
        private context: string| null = null
    ) {
        $SD.on(`com.thibault.p0.${name}.keyDown`, (event: SDEvent) => this.onKeyDown(event))
        $SD.on(`com.thibault.p0.${name}.keyUp`, (event: SDEvent) => this.onKeyUp(event))
    }

    private onKeyDown (sdEvent: SDEvent) {
        if (this.context && this.context !== sdEvent.context) {
            return
        }
        this.pressedAt = performance.now()
    }

    private onKeyUp (sdEvent: SDEvent) {
        if (this.context && this.context !== sdEvent.context) {
            return
        }

        if (!this.pressedAt) {
            console.error('Got Key up without key down')
            return
        }

        const longPress = (performance.now() - this.pressedAt) > Config.LONG_PRESS_THRESHOLD
        this.pressedAt = null

        if (longPress) {
            (this.longPressFunc || this.pressFunc)()
        } else {
            this.pressFunc()
        }
    }
}

export default PressState
