import {IMachine} from "./IMachine";
import {MachineCreator} from "./MachineCreator";

export class Lathe implements IMachine {
    public operation(): string {
        // @ts-ignore
        return `${this.constructor.name} is turning`
    }
}

export class LatheCreator extends MachineCreator {
    getMachine(): IMachine {
        return new Lathe();
    }
}
