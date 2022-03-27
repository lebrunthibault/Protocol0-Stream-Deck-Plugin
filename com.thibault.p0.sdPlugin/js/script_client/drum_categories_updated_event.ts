class DrumCategoriesUpdatedEvent {
    public readonly drumCategories: string[]
    constructor(drumCategories: string[]) {
        this.drumCategories = drumCategories
    }
}

export default DrumCategoriesUpdatedEvent