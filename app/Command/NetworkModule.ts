import {Module} from "./Module";
import {IMessage} from "./IMessage";
import {MessageHandler} from "./MessageHandler";

export class NetworkModule extends Module {

    messageHandler: MessageHandler;

    constructor(msgHandler: MessageHandler) {
        super();
        this.messageHandler = msgHandler;
    }


    processMessage(msg: IMessage) {
        console.log(`Message ${JSON.stringify(msg)} is processing`)
        console.log('Message processing finished');
        msg.callBack();
        return msg;
    }
}
