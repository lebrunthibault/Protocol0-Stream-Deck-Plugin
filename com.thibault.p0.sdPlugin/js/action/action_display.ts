import { toStreamDeckTitle } from '../services/utils'
import Icons from '../services/icons'

class ActionDisplay {
    private readonly context: string
    private readonly icon: string

    constructor (context: string, icon: string) {
        this.context = context
        this.icon = icon
    }

    enable (title: string) {
        this.setTitle(toStreamDeckTitle(title))
        this.setImage(this.icon)
    }

    disable () {
        this.setTitle('')
        this.setImage(Icons.disabled)
    }

    private setTitle (title: string) {
        $SD.api.setTitle(this.context, title)
    }

    private setImage (image: string) {
        $SD.api.setImage(this.context, image)
    }
}

export default ActionDisplay
