class Action {
    constructor(name, func) {
        this.name = name;
        this.func = func;
        this.context = null;
        this.enabled = true
        $SD.on(`com.thibault.p0.${name}.willAppear`, (event) => this.onWillAppear(event));
        $SD.on(`com.thibault.p0.${name}.keyUp`, (event) => this.onKeyUp(event));
    }

    toString() {
        return `name: ${this.name}, context: ${this.context}, enabled: ${this.enabled}`
    }

    onWillAppear(event) {
        this.context = event.context
    }

    onKeyUp(event) {
        if (this.enabled) {
            this.func()
        } else {
            this.showAlert()
        }
    }

    enable() {
        this.enabled = true
        this.setImage(Images.playPause)
    }

    disable() {
        this.enabled = false
        this.setTitle("")
        this.setImage(Images.disabled)
    }

    setTitle(title) {
        $SD.api.setTitle(this.context, title)
    }

    setImage(image) {
        $SD.api.setImage(this.context, image)
    }

    showAlert() {
        $SD.api.showAlert(this.context)
    }
}
