import Config from '../config'

const API = {
    toggleTrack (name: string) {
        fetch(`${Config.P0_API_URL}/toggle_track/${name}`).then(() => null)
    },
    loadDrumSamples (category: string) {
        fetch(`${Config.P0_API_URL}/load_drum_rack/drums/${category}`).then(() => null)
    },
    loadVocalSamples (category: string) {
        fetch(`${Config.P0_API_URL}/load_drum_rack/vocals/${category}`).then(() => null)
    },
    drumRackToSimpler () {
        fetch(`${Config.P0_API_URL}/drum_rack_to_simpler`).then(() => null)
    },
    toggleRoomEq () {
        fetch(`${Config.P0_API_URL}/toggle_room_eq`).then(() => null)
    },
    loadDevice (name: string) {
        fetch(`${Config.P0_API_URL}/load_device/${name}`).then(() => null)
    },
    selectOrLoadDevice (name: string) {
        fetch(`${Config.P0_API_URL}/select_or_load_device/${name}`).then(() => null)
    }
}

export default API
