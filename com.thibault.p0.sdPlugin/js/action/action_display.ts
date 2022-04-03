class ActionDisplay {
    private readonly context: string

    constructor(context: string) {
        this.context = context
    }

    setTitle(title: string) {
        $SD.api.setTitle(this.context, title)
    }

    setImage(image: string) {
        $SD.api.setImage(this.context, image)
    }
}

export default ActionDisplay