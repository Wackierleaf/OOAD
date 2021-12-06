import {IMachine} from "./IMachine";
import {MachineCreator} from "./MachineCreator";
import {IMillingMachine} from "./IMillingMachine";

export class MillingMachine implements IMachine, IMillingMachine {
    controlScheme: string;
    material: string;

    constructor() {
        this.controlScheme = 'Milling machine control scheme';
        this.material = 'Steel';
    }

    public operation(): string {
        // @ts-ignore
        return `${this.constructor.name} is milling`
    }

    public calibrateSurface() {
        console.log('Surface calibrated');
    }
}

export class MillingMachineCreator extends MachineCreator {
    getMachine(): IMachine {
        return new MillingMachine();
    }
}
