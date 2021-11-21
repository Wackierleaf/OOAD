import {IMessage} from "./IMessage";

export abstract class Module {
    abstract processMessage(msg: IMessage): void;
}
