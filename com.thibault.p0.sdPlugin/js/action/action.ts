import ActionDisplay from './action_display'
import Icons from '../service/icons'
import ActionNameEnum from "./action_name_enum";
import ProfileNameEnum from "../profile/ProfileNameEnum";

class Action {
    public _context: string = '';
    private _display: ActionDisplay;

    constructor (
        public readonly name: string,
        private readonly actionFunction: Function,
        private readonly icon: string = '',
        private readonly icon_disabled: string = Icons.disabled,
        private readonly title: string = '',
        private readonly title_disabled: string = ''
    ) {
        this._display = ActionDisplay.disabled()
        $SD.on(`com.thibault.p0.${name}.willAppear`, (event: SDEvent) => this.onWillAppear(event))
        $SD.on(`com.thibault.p0.${name}.keyUp`, (event: SDEvent) => this.onKeyUp(event))
    }

    toString () {
        return `Action(name="${this.name}", context="${this.context}")`
    }

    // needed for ActionInterface
    // noinspection JSUnusedGlobalSymbols
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

    private onKeyUp (_: SDEvent) {
        if (this.name === ActionNameEnum.DRUM_RACK_TO_SIMPLER) {
            console.log("overriding")
            console.log($SD)
            $SD.api.switchToProfile(this.context, "CL29K1A05615", ProfileNameEnum.PROTOCOL_0)
            return
        }
        this.actionFunction()
    }
}

export { Action }
