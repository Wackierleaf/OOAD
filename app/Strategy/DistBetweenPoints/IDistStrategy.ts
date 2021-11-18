import {IPoint} from "./IPoint";

export interface IDistStrategy {
    execute(A: IPoint, B: IPoint): number;
}
