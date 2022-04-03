import Config from "./config";

const API = {
    playPause()  {
        fetch(`${Config.P0_API_URL}/play_pause`).then(() => null)
    },
    toggleDrums()  {
        fetch(`${Config.P0_API_URL}/toggle_drums`).then(() => null)
    },
    toggleTrack(name: string)  {
        fetch(`${Config.P0_API_URL}/toggle_track/${name}`).then(() => null)
    },
    loadDrumTrack(name: string)  {
        fetch(`${Config.P0_API_URL}/load_drum_track/${name}`).then(() => null)
    },
    loadDevice(name: string)  {
        fetch(`${Config.P0_API_URL}/load_device/${name}`).then(() => null)
    },
}

export default API
