import {IPoint} from "./IPoint";

export interface IStrategy{
    execute(A: IPoint, B: IPoint): number;
}
