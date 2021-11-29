import {Module} from "./Module";
import {IMessage} from "./IMessage";
import {NetworkModule} from "./NetworkModule";
import {MessageHandler} from "./MessageHandler";

export class WorkingModule extends Module {

    messageHandler: MessageHandler;

    constructor(handler: MessageHandler) {
        super();
        this.messageHandler = handler;
    }

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
        console.log(`Message ${JSON.stringify(msg)} was generate`);
        return msg;
    }

    startWork() {
        setInterval(() => {
            const msg = this.generateMsg();
            const receivedMsg = this.messageHandler.sendMessage(msg);
            console.log('* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ')
        }, (Math.floor(Math.random() * (3 - 2 + 1)) + 1)*1000);
    }
}
