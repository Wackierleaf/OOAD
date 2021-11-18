import {IDistStrategy} from "./IDistStrategy";
import {IPoint} from "./IPoint";

export class DistCalculation1 implements IDistStrategy {
    execute(A: IPoint, B: IPoint): number {
        return Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2));
    }
}
