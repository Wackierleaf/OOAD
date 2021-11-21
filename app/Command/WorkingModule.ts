import {Module} from "./Module";
import {IMessage} from "./IMessage";

export class WorkingModule extends Module {
    processMessage(msg: IMessage) {
        console.log(`Message checked at ${new Date().toLocaleTimeString()}\n\n`);
    }

    generateMsg(): IMessage {
        const msg: IMessage = {
            text: (Math.floor(Math.random() * (10 - 1 + 1)) + 1).toString(),
            length: 1,
            callBack: function () {
                console.log('This is callback', new Date().toLocaleTimeString());
            },
            recipient: 'Network module'

        }

        return msg;
    }
}
