class DrumTrackNamesUpdatedEvent {
    public readonly drumTrackNames: string[]
    constructor(drumTrackNames: string[]) {
        this.drumTrackNames = drumTrackNames
    }
}

export default DrumTrackNamesUpdatedEvent