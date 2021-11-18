import {IDistStrategy} from "./IDistStrategy";
import {IPoint} from "./IPoint";

export class DistCalculation2 implements IDistStrategy {
    execute(A: IPoint, B: IPoint): number {
        return Math.max(Math.abs(B.x - A.x), Math.abs(B.y - A.y));
    }
}
