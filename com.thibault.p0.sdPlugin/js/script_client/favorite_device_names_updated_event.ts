class FavoriteDeviceNamesUpdatedEvent {
    public readonly favorite_device_names: string[]
    constructor(favorite_device_names: string[]) {
        this.favorite_device_names = favorite_device_names
    }
}

export default FavoriteDeviceNamesUpdatedEvent