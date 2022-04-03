import Container from "./js/container";

if (window && (window as any).$SD) {
    $SD.on('connected', async (_: object) => {
        await initApplication()
    })
}

async function initApplication() {
    const container = new Container()
    container.actionFactory.createActions()
    await container.scriptClient.connect()
}