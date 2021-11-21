import {NetworkModule} from "./NetworkModule";
import {ICommand} from "./ICommand";
import {IMessage} from "./IMessage";

export class ProcessingCmd implements ICommand{
    private _networkModule: NetworkModule;
    msg: IMessage;

    constructor(networkModule: NetworkModule, msg: IMessage) {
        this._networkModule = networkModule;
        this.msg = msg;
    }

    execute() {
        return this._networkModule.processMessage(this.msg);
    }
}
