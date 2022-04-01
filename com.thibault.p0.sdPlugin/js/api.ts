// noinspection JSIgnoredPromiseFromCall

import Config from "./config";

const API = {
    playPause()  {
        fetch(`${Config.P0_API_URL}/play_pause`)
    },
    toggleDrums()  {
        fetch(`${Config.P0_API_URL}/toggle_drums`)
    },
    toggleTrack(name: string)  {
        fetch(`${Config.P0_API_URL}/toggle_track/${name}`)
    },
    loadDrumTrack(name: string)  {
        fetch(`${Config.P0_API_URL}/load_drum_track/${name}`)
    },
    loadDevice(name: string)  {
        fetch(`${Config.P0_API_URL}/load_device/${name}`)
    },
}

export default API
