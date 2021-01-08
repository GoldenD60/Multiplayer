//% color="#AA278D"
namespace multiplayerConnection {
    //% block="on connect"
    export function onConnect(handler: () => void) {
        handler("Hello World!");
    }
}