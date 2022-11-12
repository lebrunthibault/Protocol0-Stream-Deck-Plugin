import Config from '../config'

const API = {
    drumRackToSimpler () {
        fetch(`${Config.P0_API_URL}/drum_rack_to_simpler`).then(() => null)
    },
    loadDevice (name: string) {
        fetch(`${Config.P0_API_URL}/load_device/${name}`).then(() => null)
    },
    loadDrumSamples (category: string) {
        fetch(`${Config.P0_API_URL}/load_drum_rack/drums/${category}`).then(() => null)
    },
    loadVocalSamples (category: string) {
        fetch(`${Config.P0_API_URL}/load_drum_rack/vocals/${category}`).then(() => null)
    },
    muteSet (setId: string) {
        fetch(`${Config.P0_API_URL}/set/${setId}/mute`).then(() => null)
    },
    openSet (shortcutName: string) {
        fetch(`${Config.P0_API_URL}/set/${shortcutName}/open`).then(() => null)
    },
    refreshSets () {
        fetch(`${Config.P0_API_URL}/set/refresh`).then(() => null)
    },
    selectOrLoadDevice (name: string) {
        fetch(`${Config.P0_API_URL}/select_or_load_device/${name}`).then(() => null)
    },
    syncSets () {
        fetch(`${Config.P0_API_URL}/set/sync`).then(() => null)
    },
    toggleRoomEq () {
        fetch(`${Config.P0_API_URL}/toggle_room_eq`).then(() => null)
    }
}

export default API
