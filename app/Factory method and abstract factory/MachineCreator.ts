import {IMachine} from "./IMachine";

export abstract class MachineCreator {
    public abstract getMachine(): IMachine;

    public doOperation(): string {
        const machine = this.getMachine();
        return `Machine creator: The same creator's code has just worked with ${machine.operation()}`;
    }
}
