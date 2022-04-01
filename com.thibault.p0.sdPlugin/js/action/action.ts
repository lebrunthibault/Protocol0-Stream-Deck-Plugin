import Images from "../img";

class Action {
    private readonly name: string;
    private readonly func: Function;
    public context: string;
    protected enabled: boolean;

    constructor(name: string, func: Function) {
        this.name = name;
        this.func = func;
        this.context = "";
        this.enabled = true
        $SD.on(`com.thibault.p0.${name}.willAppear`, (event: SDEvent) => this.onWillAppear(event));
        $SD.on(`com.thibault.p0.${name}.keyUp`, (event: SDEvent) => this.onKeyUp(event));
    }

    toString() {
        return `name: ${this.name}, context: ${this.context}, enabled: ${this.enabled}`
    }

    onWillAppear(event: SDEvent) {
        this.context = event.context
    }

    onKeyUp(_: SDEvent) {
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

    setTitle(title: string) {
        $SD.api.setTitle(this.context, title)
    }

    setImage(image: string) {
        $SD.api.setImage(this.context, image)
    }

    showAlert() {
        $SD.api.showAlert(this.context)
    }
}

export {Action}
