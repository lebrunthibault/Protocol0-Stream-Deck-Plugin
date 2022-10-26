import ActionDisplay from './action_display'
import Icons from '../service/icons'
import PressState from './press_state'

class Action {
    public _context: string = '';
    private _display: ActionDisplay;
    private pressState: PressState;

    constructor (
        public readonly name: string,
        private readonly pressFunc: Function,
        private readonly longPressFunc: Function|null = null,
        private readonly icon: string = '',
        private readonly icon_disabled: string = Icons.disabled,
        private readonly title: string = '',
        private readonly title_disabled: string = ''
    ) {
        this.pressState = new PressState(name, pressFunc, longPressFunc)

        this._display = ActionDisplay.disabled()
        $SD.on(`com.thibault.p0.${name}.willAppear`, (event: SDEvent) => this.onWillAppear(event))
    }

    toString () {
        return `Action(name="${this.name}", context="${this.context}")`
    }

    // needed for ActionInterface
    get display (): ActionDisplay {
        return this._display
    }

    get context (): string {
        return this._context
    }

    private onWillAppear (event: SDEvent) {
        this._context = event.context
        this._display = new ActionDisplay(
            this.context,
            this.icon,
            this.icon_disabled,
            this.title,
            this.title_disabled
        )
    }
}

export { Action }
