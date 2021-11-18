import {ICommand} from "./ICommand";
import {NetworkModule} from "./NetworkModule";

export class NetworkModuleCommand implements ICommand {
    private NetworkModule: NetworkModule;

    constructor(networkModule: NetworkModule) {
        this.NetworkModule = networkModule;
    }

    execute() {
    }
}
