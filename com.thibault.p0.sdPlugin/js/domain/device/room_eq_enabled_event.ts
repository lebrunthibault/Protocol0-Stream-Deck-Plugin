class RoomEqEnabledEvent {
    public readonly enabled: boolean
    constructor (enabled: boolean) {
        this.enabled = enabled
    }

    toBool () {
        return this.enabled
    }
}

export default RoomEqEnabledEvent
