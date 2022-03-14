class Action {
    static getByName(name) {
        const action = actions.find(a => a.name === name);
        if (!action) {
            throw new Error(`couldn't find action by name : ${name}`)
        }
        return action
    }
    constructor(name, id) {
        this.name = name;
        this.id = id;
        console.log(name, id)
    }

    setTitle(title) {
        console.log(this)
        console.log("set title " + title)
    }
}

const actionConfig = {
    "toto": 2,
    "titi": 3,
}
const actions = Object.entries(actionConfig).map(([name, id]) => new Action(name, id))

console.log(Action.getByName("toto"))

const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })


wss.on('connection', ws => {
    console.log("websocket server connection opened")
    ws.on('message', message => {

        console.log(message)
        console.log(JSON.parse(message))
    })
    ws.send('ho!')
    setInterval(() => ws.send('ping'), 1000)
})