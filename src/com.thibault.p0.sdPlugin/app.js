$SD.on('connected', (config)  => {
    console.log(config)
    // Subscribe to the willAppear and other events
    // $SD.on('com.thibault.p0.action.willAppear', (json) => action.onWillAppear(json));
    $SD.on('com.thibault.p0.play.keyUp', onKeyUp(playPause));
    $SD.on('com.thibault.p0.drums.keyUp', onKeyUp(toggleDrums));
    $SD.on('com.thibault.p0.kick.keyUp', onKeyUp(toggleKick));
    $SD.on('com.thibault.p0.snare.keyUp', onKeyUp(toggleSnare));
    $SD.on('com.thibault.p0.hat.keyUp', onKeyUp(toggleHat));
    $SD.on('com.thibault.p0.hat.keyUp', onKeyUp(test));
})

const test = (_) => {
    // $SD.
}

const onKeyUp = (func) => {
    return (data) => {
        console.log("on key up")
        console.log(data)
        func()
    }
}

const playPause = () => fetch("http://127.0.0.1:8000/play_pause")
const toggleDrums = () => fetch("http://127.0.0.1:8000/toggle_drums")
const toggleKick = () => fetch("http://127.0.0.1:8000/toggle_track/kick")
const toggleSnare = () => fetch("http://127.0.0.1:8000/toggle_track/snare")
const toggleHat = () => fetch("http://127.0.0.1:8000/toggle_track/hat")
