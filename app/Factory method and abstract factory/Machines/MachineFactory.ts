import {IMachineFactory} from "./IFactory";
import {Lathe} from "./LatheCreator";
import {MillingMachine} from "./MillingMachineCreator";
import {IMillingMachine} from "./IMillingMachine";
import {ILathe} from "./ILathe";
import {IDrillingMachine} from "./IDrillingMachine";
import {DrillingMachine} from "./DrillingMachineCreator";

export class MachineFactory implements IMachineFactory {
    public createLathe(): ILathe {
        return new Lathe();
    }

    public createMillingMachine(): IMillingMachine {
        return new MillingMachine();
    }

    public createDrillingMachine(): IDrillingMachine {
        return new DrillingMachine();
    }
}
