import {IStrategy} from "./IStrategy";
import {IPoint} from "./IPoint";

export class DistCalculation3 implements IStrategy<{A: IPoint, B: IPoint}, number> {
    execute(points: { A: IPoint; B: IPoint }): number {
        const {A, B} = points;
        return Math.abs(B.x - A.x) + Math.abs(B.y - A.y);
    }
}
