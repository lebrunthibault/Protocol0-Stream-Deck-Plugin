class RegistryEntry {
    public eventClass: Class
    public subscribers: Set<Function> = new Set<Function>()

    public toString() {
        return `eventClass: ${this.eventClass}, subscribers: ${this.subscribers}`
    }

    constructor(eventClass: Class) {
        this.eventClass = eventClass
    }
}

class Registry {
    private readonly entries: RegistryEntry[] = []

    public toString() {
        return this.entries
    }

    public register(eventClass: Class, func: Function) {
        let registry_entry = this.entries.find((entry: RegistryEntry) => entry.eventClass === eventClass)
        if (!registry_entry) {
            registry_entry = new RegistryEntry(eventClass)
            this.entries.push(registry_entry)
        }

        registry_entry.subscribers.add(func)
    }

    public getSubscribers(eventClass: Class): Function[]
    {
        const registry_entry = this.entries.find((entry: RegistryEntry) => eventClass === entry.eventClass)
        if (!registry_entry) {
            console.warn(`event emitted without subscriber: ${eventClass}`)
            console.warn(this)
            return []
        }

        return Array.from(registry_entry.subscribers)
    }
}

const registry = new Registry()

class EventBus {

    static subscribe(eventClass: Class, func: Function) {
        console.log(`subscribing ${eventClass.name}: func: ${func}`)
        registry.register(eventClass, func)
    }

    static emit(event: Object) {
        console.log("emitting event " + event.constructor.name)

        const subscribers = registry.getSubscribers(event.constructor)

        for (const subscriber of subscribers) {
            subscriber(event)
        }
    }
}

export default EventBus