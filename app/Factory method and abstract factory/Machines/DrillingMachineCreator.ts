import {IMachine} from "./IMachine";
import {MachineCreator} from "./MachineCreator";
import {IDrillingMachine} from "./IDrillingMachine";

export class DrillingMachine implements IMachine, IDrillingMachine {
    controlScheme: string;
    material: string;

    constructor() {
        this.controlScheme = 'Drilling machine control scheme';
        this.material = 'steel';
    }

    public operation(): string {
        // @ts-ignore
        return `${this.constructor.name} is drilling`;
    }

    public makeHole() {
        console.log('Hole made');
    }
}

export class DrillingMachineCreator extends MachineCreator {
    public getMachine(): IMachine {
        return new DrillingMachine();
    }
}

