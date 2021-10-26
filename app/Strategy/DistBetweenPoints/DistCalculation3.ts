import {IStrategy} from "./IStrategy";
import {IPoint} from "./IPoint";

export class DistCalculation3 implements IStrategy {
    execute(A: IPoint, B: IPoint): number {
        return Math.abs(B.x - A.x) + Math.abs(B.y - A.y);
    }
}
