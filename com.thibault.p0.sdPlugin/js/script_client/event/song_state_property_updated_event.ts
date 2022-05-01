import { SontStatePropertyItems } from './song_state_property_items'

abstract class SongStatePropertyUpdatedEvent {
    public readonly items: SontStatePropertyItems
    constructor (items: SontStatePropertyItems) {
        this.items = items
    }
}

export default SongStatePropertyUpdatedEvent
