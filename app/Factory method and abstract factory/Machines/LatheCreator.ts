import {IMachine} from "./IMachine";
import {MachineCreator} from "./MachineCreator";
import {ILathe} from "./ILathe";

export class Lathe implements IMachine, ILathe {
    controlScheme: string;
    material: string;

    constructor() {
        this.controlScheme = 'Lathe control scheme';
        this.material = 'Wood';
    }


    public operation(): string {
        // @ts-ignore
        return `${this.constructor.name} is turning`
    }

    public cutPattern() {
        console.log('Pattern carved');
    }
}

export class LatheCreator extends MachineCreator {
    getMachine(): IMachine {
        return new Lathe();
    }
}
