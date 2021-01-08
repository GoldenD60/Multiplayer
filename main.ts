//% color="#AA278D"
namespace multiplayer {
    //% block="on connect"
    export function onConnect(handler: () => void) {
        handler("Hello World!");
    }
}