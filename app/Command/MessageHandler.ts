import {IMessage} from "./IMessage";
import {NetworkModule} from "./NetworkModule";

export class MessageHandler {
    private  networkModule: NetworkModule;

    constructor() {
        // @ts-ignore
        this.networkModule = new NetworkModule();
    }

    sendMessage(msg: IMessage) {
        return this.networkModule.processMessage(msg);
    }
}
