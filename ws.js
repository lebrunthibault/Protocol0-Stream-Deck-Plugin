inPort = 8080

const WebSocket = require('ws')
websocket = new WebSocket('ws://127.0.0.1:' + inPort);

websocket.onopen = function () {
    websocket.send("ws js is up");
};

websocket.onerror = function (evt) {
    console.warn('WEBOCKET ERROR', evt, evt.data);
};

websocket.onclose = function (evt) {
    console.warn('[STREAMDECK]***** WEBOCKET CLOSED ****');
};

websocket.onmessage = function (evt) {
    console.log("recevied event")
    console.log(evt.data)
};

console.log("ws client started")