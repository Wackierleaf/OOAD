import {ICommand} from "./ICommand";

export class Invoker {
    private _command: ICommand;

    constructor(cmd: ICommand) {
        this._command = cmd;
    }

    set command(cmd: ICommand) {
        this._command = cmd;
    }

    do() {
        return this._command.execute();
    }
}
