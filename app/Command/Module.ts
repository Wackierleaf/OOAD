import {IMessage} from "./IMessage";
import {MessageHandler} from "./MessageHandler";

export abstract class Module {
    abstract messageHandler: MessageHandler;
    abstract processMessage(msg: IMessage): void;
}
