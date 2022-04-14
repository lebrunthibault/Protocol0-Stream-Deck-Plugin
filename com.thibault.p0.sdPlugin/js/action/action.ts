class Action {
    public readonly name: string;
    protected readonly actionFunction: Function;
    public context: string = '';

    constructor (name: string, func: Function) {
        this.name = name
        this.actionFunction = func
        $SD.on(`com.thibault.p0.${name}.willAppear`, (event: SDEvent) => this.onWillAppear(event))
        $SD.on(`com.thibault.p0.${name}.keyUp`, (event: SDEvent) => this.onKeyUp(event))
    }

    toString () {
        return `Action(name="${this.name}", context="${this.context}")`
    }

    private onWillAppear (event: SDEvent) {
        this.context = event.context
    }

    private onKeyUp (_: SDEvent) {
        this.actionFunction()
    }
}

export { Action }
