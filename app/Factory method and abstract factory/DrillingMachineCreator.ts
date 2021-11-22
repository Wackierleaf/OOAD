import {IMachine} from "./IMachine";
import {MachineCreator} from "./MachineCreator";

export class DrillingMachine implements IMachine {
    public operation(): string {
        // @ts-ignore
        return `${this.constructor.name} is drilling`;
    }
}

export class DrillingMachineCreator extends MachineCreator {
    public getMachine(): IMachine {
        return new DrillingMachine();
    }
}

