class SongStatePropertyUpdatedEvent {
    public readonly items: string[]
    constructor (items: string[]) {
      this.items = items
    }
}

export default SongStatePropertyUpdatedEvent
