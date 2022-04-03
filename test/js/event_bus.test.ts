import EventBus from "../../com.thibault.p0.sdPlugin/js/event_bus";
import ActionGroupAppearedEvent from "../../com.thibault.p0.sdPlugin/js/action/action_group/action_group_appeared_event";

test('event_bus', function() {
    expect(true).toBe(true);

    let called = false
    const subscriber = () => called = true
    EventBus.subscribe(ActionGroupAppearedEvent, subscriber)
    EventBus.emit(new ActionGroupAppearedEvent())
    expect(called).toBe(true);
});