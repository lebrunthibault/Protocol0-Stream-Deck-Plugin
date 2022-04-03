import {Action} from "./action";
import ActionDisplay from "./action_display";
import Icons from "../services/icons";
import {toStreamDeckTitle} from "../services/utils";


class DynamicAction extends Action {
    private enabled: boolean = true
    private dynamicParameter: string = ""
    private readonly icon: string
    public readonly index: number
    private readonly display: ActionDisplay
    protected readonly actionFunction: DynamicActionFunction;

    onWillAppear(_: SDEvent) {
        // context is already set
    }

    constructor(event: SDEvent, name: string, icon: string, actionFunction: DynamicActionFunction) {
        super(name, actionFunction)

        this.icon = icon
        this.actionFunction = actionFunction

        this.context = event.context
        this.display = new ActionDisplay(event.context)
        this.index = event.payload.coordinates.row * 5 + event.payload.coordinates.column

        this.disable()
    }

    setParameter(dynamicParameter: string) {
        console.log(`setting parameter for ${this}`)
        this.dynamicParameter = dynamicParameter
        this.display.setTitle(toStreamDeckTitle(dynamicParameter))
        this.enable()
    }

    onKeyUp(sdEvent: SDEvent) {
        if (this.context != sdEvent.context) {
            return
        }
        if (this.enabled) {
            this.actionFunction(this.dynamicParameter)
        } else {
            console.log(`action inactive: ${this}`)
        }
    }

    enable() {
        this.enabled = true
        this.display.setImage(this.icon)
    }

    disable() {
        this.enabled = false
        this.display.setTitle("")
        this.display.setImage(Icons.disabled)
    }
}

export default DynamicAction
