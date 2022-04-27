import { toStreamDeckTitle } from '../services/string_utils'
import Icons from '../services/icons'

class ActionDisplay {
    /* eslint-disable no-useless-constructor */
    constructor (
        private readonly context: string,
        private readonly icon: string,
        private readonly title: string = ''
    ) {
    }

    enable (title: string|null = null) {
        this.setTitle(toStreamDeckTitle(title || this.title))
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
