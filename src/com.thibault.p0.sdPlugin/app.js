$SD.on('connected', async (_) => {
    await init()
})

async function init() {
    const container = new Container()
    container.actionFactory.createActions()
    await container.scriptWebSocket.connect()
}
