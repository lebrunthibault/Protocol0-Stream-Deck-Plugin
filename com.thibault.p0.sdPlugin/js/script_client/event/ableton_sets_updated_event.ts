import { ActionSlotItem, SongStateUpdatedEvent } from './song_state_updated_event'
import { SongState } from '../song_state'

class SongStateItem extends ActionSlotItem {
    get value (): string {
        return (this._item as unknown as SongState).id
    }

    get label (): string {
        return (this._item as unknown as SongState).title
    }

    get active (): boolean {
        return !(this._item as unknown as SongState).muted
    }
}

class AbletonSetsUpdatedEvent extends SongStateUpdatedEvent {
    constructor (items: any[]) {
        super(items, SongStateItem)
    }
}

export { AbletonSetsUpdatedEvent, SongStateItem }
