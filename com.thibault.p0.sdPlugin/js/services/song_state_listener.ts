import EventBus from '../event_bus'
import DrumRackVisibleUpdatedEvent from '../script_client/drum_rack_visible_updated_event'
import ActionRepository from '../action/action_repository'
import { inject, injectable } from 'tsyringe'
import ActionNameEnum from '../action/ActionNameEnum'

@injectable()
class SongStateListener {
    constructor (
        @inject(ActionRepository) private readonly actionRepository: ActionRepository
    ) {
        EventBus.subscribe(DrumRackVisibleUpdatedEvent, (event: DrumRackVisibleUpdatedEvent) => this.onDrumRackVisibleUpdatedEvent(event))
    }

    onDrumRackVisibleUpdatedEvent (event: DrumRackVisibleUpdatedEvent) {
        const drumRackToSimplerAction = this.actionRepository.getActionByName(ActionNameEnum.DRUM_RACK_TO_SIMPLER)

        if (event.visible) {
            drumRackToSimplerAction?.display.enable()
        } else {
            drumRackToSimplerAction?.display.disable()
        }
    }
}

export default SongStateListener
