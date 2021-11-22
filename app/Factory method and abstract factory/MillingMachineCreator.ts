import {IMachine} from "./IMachine";
import {MachineCreator} from "./MachineCreator";

export class MillingMachine implements IMachine {
    public operation(): string {
        // @ts-ignore
        return `${this.constructor.name} is milling`
    }
}

export class MillingMachineCreator extends MachineCreator {
    getMachine(): IMachine {
        return new MillingMachine();
    }
}
