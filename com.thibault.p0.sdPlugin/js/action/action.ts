import ActionDisplay from './action_display'
import Icons from '../service/icons'
import ActionPressState from './action_press_state'
import ActionContext from './action_context'

class Action {
    private readonly _context: ActionContext;
    private readonly _display: ActionDisplay;
    private pressState: ActionPressState;

    constructor (
        public readonly name: string,
        private readonly pressFunc: Function,
        private readonly longPressFunc: Function|null = null,
        private readonly icon: string = '',
        private readonly icon_disabled: string = Icons.disabled,
        private readonly title: string = '',
        private readonly title_disabled: string = ''
    ) {
        this._context = new ActionContext(name)
        this.pressState = new ActionPressState(this._context, pressFunc, longPressFunc)
        this._display = new ActionDisplay(
            this._context,
            this.icon,
            this.icon_disabled,
            this.title,
            this.title_disabled
        )

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
        return this._context.context
    }

    private onWillAppear (event: SDEvent) {
        this._context.context = event.context
    }
}

export { Action }
