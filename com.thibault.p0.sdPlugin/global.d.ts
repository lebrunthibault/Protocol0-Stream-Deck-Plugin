interface SD {
    api: {
        setTitle: (context: string, title: string) => void,
        setImage: (context: string, image: string) => void,
        showAlert: (context: string) => void,
    },
    on: (event: string, callback: Function) => void
}

interface SDEvent {
    context: string,
    payload: {
        coordinates: {
            row: number
            column: number
        }
    }
}

interface Class extends Function {

}

declare module '_'

declare var $SD: SD;
