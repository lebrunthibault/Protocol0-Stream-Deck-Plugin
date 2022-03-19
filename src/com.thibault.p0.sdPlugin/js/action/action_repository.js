class ActionRepository {
    /**
     * @param {DB} db
     */
    constructor(db) {
        this.db = db
    }

    /**
     * @returns {Action}
     */
    save(action) {
        this.db.actions.push(action)
        console.log(`saved action ${action}`)
    }

    /**
     * @returns {[Action]}
     */
    getActionByClass(cls) {
        /** @type {Action[]} */
        let actions = this.db.actions.filter((a => a instanceof cls))

        if (cls === ToggleTrackAction || cls === LoadDrumTrackAction) {
            // noinspection JSUnresolvedVariable
            actions = actions.sort((a, b) => a.index - b.index)
        }
        return actions
    }

    /**
     * @returns {Action}
     */
    getActionByContext(context) {
        return this.db.actions.find(a => a.context === context)
    }
}