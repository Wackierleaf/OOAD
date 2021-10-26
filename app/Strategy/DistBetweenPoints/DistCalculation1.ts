import {IStrategy} from "./IStrategy";
import {IPoint} from "./IPoint";

export class DistCalculation1 implements IStrategy {
    execute(A: IPoint, B: IPoint): number {
        return Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2));
    }
}
