import { ActionSlotItem, SetStateUpdatedEvent } from './set_state_updated_event'
import { AbletonSet } from '../set_state'

class SetStateItem extends ActionSlotItem {
    get value (): string {
        return (this._item as unknown as AbletonSet).id
    }

    get label (): string {
        return (this._item as unknown as AbletonSet).title
    }

    get active (): boolean {
        return !(this._item as unknown as AbletonSet).muted
    }
}

class AbletonSetsUpdatedEvent extends SetStateUpdatedEvent {
    constructor (items: any[]) {
        super(items, SetStateItem)
    }
}

export { AbletonSetsUpdatedEvent, SetStateItem }
