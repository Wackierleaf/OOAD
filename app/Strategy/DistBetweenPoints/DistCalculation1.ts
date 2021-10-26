import {IStrategy} from "./IStrategy";
import {IPoint} from "./IPoint";

export class DistCalculation1 implements IStrategy<{A: IPoint, B: IPoint}, number> {
    execute(param: { A: IPoint; B: IPoint }): number {
        const {A, B} = param;
        return Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2));
    }
}
