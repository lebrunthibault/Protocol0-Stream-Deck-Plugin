const registry = {}
const BusEvents = {
    songState: "songState",
    actionGroupCreated: "actionGroupCreated"
}

class Bus {
    static subscribe(event, func) {
        if (!event in registry) {
            registry[event] = []
        }

        if (!registry[event].includes(func)) {
            registry[event].push(func)
        }
    }

    static dispatch(event, data) {
        if (!event in registry) {
            console.warn(`event emitted without subscriber: ${event}`)
            return
        }

        for (const subscriber of registry[event]) {
            subscriber(data)
        }
    }
}