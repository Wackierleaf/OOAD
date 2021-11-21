import {ICommand} from "./ICommand";
import {WorkingModule} from "./WorkingModule";

export class GenerateCmd implements ICommand {
    private _workingModule: WorkingModule;

    constructor(workingModule: WorkingModule) {
        this._workingModule = workingModule;
    }
    execute() {
        return this._workingModule.generateMsg();
    }
}
