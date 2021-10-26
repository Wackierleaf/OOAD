import {IStrategy} from "./IStrategy";
import {IPoint} from "./IPoint";

export class DistCalculation2 implements IStrategy {
    execute(A: IPoint, B: IPoint): number {
        return Math.max(Math.abs(B.x - A.x), Math.abs(B.y - A.y));
    }
}
