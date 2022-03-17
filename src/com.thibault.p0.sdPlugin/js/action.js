const playPause = () => fetch(`${Config.P0_URL}/play_pause`)
const toggleDrums = () => fetch(`${Config.P0_URL}/toggle_drums`)
const toggleTrack = (name) => fetch(`${Config.P0_URL}/toggle_track/${name}`)

const drum_track_names = ["kick", "snare", "hat"]

const actionConfig = {
    "play": playPause,
    "drums": toggleDrums,
}
for (const name of drum_track_names) {
    actionConfig[name] = () => toggleTrack(name)
}

const actions = []

class Action {
    constructor(name, func) {
        this.name = name;
        this.func = func;
        this.context = null;
        this.enabled = true
        console.log("created action " + name)
        $SD.on(`com.thibault.p0.${name}.willAppear`, (event) => this.onWillAppear(event));
        $SD.on(`com.thibault.p0.${name}.keyUp`, (event) => this.onKeyUp(event));
    }

    static make_all() {
        for (const config of Object.entries(actionConfig)) {
            actions.push(new Action(config[0], config[1]))
        }
    }

    static getByName(name) {
        return actions.find(a => a.name === name);
    }

    static getByFullName(fullName) {
        return this.getByName(fullName.toLowerCase().split(" ")[0])
    }

    static onSongState(song_state) {
        console.log(`received song_state`)
        console.log(song_state)
        if ("track_names" in song_state) {
            Action.onTracksNamesUpdate(song_state.track_names)
        } else {
            console.error("Received unknown data from protocol0")
        }
    }

    static onTracksNamesUpdate(track_names) {
        let drum_track_actions = actions.filter(a => drum_track_names.includes(a.name))
        const enabled_actions = []

        for (const track_name of track_names) {
            const action = Action.getByFullName(track_name)
            if (action) {
                enabled_actions.push(action)
                drum_track_actions = drum_track_actions.filter(a => a !== action)
            }
        }

        enabled_actions.map(a => a.enable())
        drum_track_actions.map(a => a.disable())
    }

    onWillAppear(event) {
        this.context = event.context
    }

    onKeyUp(event) {
        console.log("on key up")
        console.log(event)
        if (this.enabled) {
            this.func()
        } else {
            this.showAlert()
        }
    }

    enable() {
        this.enabled = true
        this.setImage(Images.playPause)
    }

    disable() {
        this.enabled = false
        this.setImage(Images.disabled)
    }

    setTitle(title) {
        $SD.api.setTitle(this.context, title)
    }

    setImage(image) {
        $SD.api.setImage(this.context, image)
    }

    showAlert() {
        $SD.api.showAlert(this.context)
    }
}
