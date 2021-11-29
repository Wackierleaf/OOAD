import {ILathe} from "./ILathe";
import {IDrillingMachine} from "./IDrillingMachine";
import {IMillingMachine} from "./IMillingMachine";

export interface IMachineFactory {
    createLathe(): ILathe;
    createDrillingMachine(): IDrillingMachine;
    createMillingMachine(): IMillingMachine;
}
