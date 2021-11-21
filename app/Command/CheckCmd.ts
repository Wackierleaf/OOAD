import {ICommand} from "./ICommand";
import {WorkingModule} from "./WorkingModule";
import {IMessage} from "./IMessage";

export class CheckCmd implements ICommand {
    private _workingModule: WorkingModule;
    msg: IMessage;

    constructor(workingModule: WorkingModule, msg: IMessage) {
        this._workingModule = workingModule;
        this.msg = msg;
    }

    execute() {
        return this._workingModule.processMessage(this.msg);
    }
}
