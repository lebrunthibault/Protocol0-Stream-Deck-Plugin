// noinspection JSIgnoredPromiseFromCall

const API = {
    playPause()  {
        fetch(`${Config.P0_URL}/play_pause`)
    },
    toggleDrums()  {
        fetch(`${Config.P0_URL}/toggle_drums`)
    },
    toggleTrack(name)  {
        fetch(`${Config.P0_URL}/toggle_track/${name}`)
    },
    loadDrumTrack(name)  {
        fetch(`${Config.P0_URL}/load_drum_track/${name}`)
    },
}

