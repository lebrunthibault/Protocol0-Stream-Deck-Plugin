// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols

global.$SD = {
    on: () => null,
    api: {
        setTitle(context: string, title: string) {
            console.log(`SD ${context} set title '${title}'`)
        },

        setImage(context: string, image: string) {
            console.log(`SD ${context} set image`)
        },

        showAlert(context: string) {
            console.log(`SD ${context}`)
        },
    }
}

class SDEvent {
    public readonly context: string
    payload: Object
    constructor(context: string, row: number = 0, column: number = 0) {
        this.context = context
        this.payload = {
            coordinates: {
                row: row,
                column: column
            }
        }
    }
}

export {SDEvent}