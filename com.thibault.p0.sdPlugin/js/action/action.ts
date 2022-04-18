import ActionDisplay from './action_display'

class Action {
    public _context: string = '';
    private _display: ActionDisplay;

    constructor (
        public readonly name: string,
        private readonly actionFunction: Function,
        private readonly icon: string,
        private readonly title: string = ''
    ) {
        this._display = new ActionDisplay('', this.icon)
        $SD.on(`com.thibault.p0.${name}.willAppear`, (event: SDEvent) => this.onWillAppear(event))
        $SD.on(`com.thibault.p0.${name}.keyUp`, (event: SDEvent) => this.onKeyUp(event))
    }

    toString () {
        return `Action(name="${this.name}", context="${this.context}")`
    }

    get context (): string {
        return this._context
    }

    get display (): ActionDisplay {
        return this._display
    }

    private onWillAppear (event: SDEvent) {
        this._context = event.context
        this._display = new ActionDisplay(this.context, this.icon, this.title)
    }

    private onKeyUp (_: SDEvent) {
        this.actionFunction()
    }
}

export { Action }
