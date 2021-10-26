import {Context} from "./Context";
import {DistCalculation1} from "./DistCalculation1";
import {IPoint} from "./IPoint";
import {DistCalculation2} from "./DistCalculation2";
import {DistCalculation3} from "./DistCalculation3";

/**
 * Задание:
 * Стратегии:
 1. Dist = sqrt((x1-x2)^2+(y1-y2)^2).
 2. Dist = max(|x1-x2|, |y1-y2|).
 3. Dist = (|x1-x2|+|y1-y2|).
 Где x1 и y1 координаты превой точки, а x2 и y2 соответственно координаты второй.
 */

export function main() {

    const A: IPoint = {x: 1, y: 3};
    const B: IPoint =  {x: -1, y: 2};
    const context = new Context(new DistCalculation1());
    console.log(`Dist with strategy ${context.strategyName} ${context.executeLogic(A, B)}`);
    context.strategy = new DistCalculation2();
    console.log(`Dist with strategy ${context.strategyName} ${context.executeLogic(A, B)}`);
    context.strategy = new DistCalculation3();
    console.log(`Dist with strategy ${context.strategyName} ${context.executeLogic(A, B)}`);
}
