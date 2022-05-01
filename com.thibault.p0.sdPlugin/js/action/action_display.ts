import Icons from '../service/icons'

class ActionDisplay {
    /* eslint-disable no-useless-constructor */
    constructor (
        private readonly context: string,
        private readonly icon: string,
        private readonly iconDisabled: string = Icons.disabled,
        private readonly title: string = '',
        private readonly titleDisabled: string = ''
    ) {
    }

    static disabled () {
        return new ActionDisplay('', '', '', '')
    }

    // noinspection JSUnusedGlobalSymbols
    get enabled (): boolean {
        return true // unused
    }

    set enabled (enabled: boolean) {

        if (enabled) {
            if (this.title) {
                this.setTitle(this.title)
            }
            this.setImage(this.icon)
        } else {
            this.setTitle(this.titleDisabled)
            this.setImage(this.iconDisabled)
        }
    }

    setTitle (title: string) {
        $SD.api.setTitle(this.context, title)
    }

    private setImage (image: string) {
        $SD.api.setImage(this.context, image)
    }
}

export default ActionDisplay
