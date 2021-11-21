import {Module} from "./Module";
import {IMessage} from "./IMessage";

export class NetworkModule extends Module {
    processMessage(msg: IMessage) {
        console.log(`Message ${JSON.stringify(msg)} is processing`)
        console.log('Message processing finished');
        msg.callBack();
    }
}
