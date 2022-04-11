import ActionDisplay from '../action_display'
import Icons from '../../services/icons'
import { toStreamDeckTitle } from '../../services/utils'

class ActionSlot {
    public readonly name: string;
    protected readonly actionFunction: ActionSlotFunction;
    public readonly context: string;
    private enabled: boolean = true
    private parameter: string = ''
    private readonly icon: string
    public readonly index: number
    private readonly display: ActionDisplay

    constructor (event: SDEvent, name: string, icon: string, actionFunction: ActionSlotFunction) {
      this.name = name

      this.icon = icon
      this.actionFunction = actionFunction

      this.context = event.context
      this.display = new ActionDisplay(event.context)
      this.index = event.payload.coordinates.row * 8 + event.payload.coordinates.column

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

    onKeyUp (sdEvent: SDEvent) {
      if (this.context !== sdEvent.context) {
        return
      }
      if (this.enabled) {
        this.actionFunction(this.parameter)
      } else {
        console.warn(`action inactive: ${this}`)
      }
    }

    private enable () {
      console.log(`enabling ${this}`)
      this.enabled = true
      this.display.setTitle(toStreamDeckTitle(this.parameter))
      this.display.setImage(this.icon)
    }

    disable () {
      this.enabled = false
      this.parameter = ''
      this.display.setTitle('')
      this.display.setImage(Icons.disabled)
    }
}

export default ActionSlot
