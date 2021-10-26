import {IPoint} from "./Strategy/DistBetweenPoints/IPoint";
import {DistCalculation1} from "./Strategy/DistBetweenPoints/DistCalculation1";
import {DistContext} from "./Strategy/DistBetweenPoints/DistContext";
import {DistCalculation3} from "./Strategy/DistBetweenPoints/DistCalculation3";
import {DistCalculation2} from "./Strategy/DistBetweenPoints/DistCalculation2";
import {ArrayContext} from "./Strategy/Array/ArrayContext";
import {FindMedianElement} from "./Strategy/Array/FindMedianElement";
import {FindAverageValue} from "./Strategy/Array/FindAverageValue";
import {FindFrequentItem} from "./Strategy/Array/FindFrequentItem";

/**
 Реализовать 2 набора стратегий.
 1-й вычисления расстояния между точками на плоскости.
 Стратегии:
 1. Dist = sqrt((x1-x2)^2+(y1-y2)^2).
 2. Dist = max(|x1-x2|, |y1-y2|).
 3. Dist = (|x1-x2|+|y1-y2|).
 Где x1 и y1 координаты превой точки, а x2 и y2 соответственно координаты второй.
 2-я стратегия работа с массивом, сгенерировать массив из 5 < n < 30 элементов из отрезка [1;5] целых
 чисел и произвести его оценку.
 Стртегии:
 1. Найти медианный элемент.
 2. Найти среднее значение.
 3. Найти самй частый элемент.
 */
function demonstrateStrategyPattern() {
    // 1
    const A: IPoint = {x: 1, y: 3};
    const B: IPoint =  {x: -1, y: 2};
    const distContext = new DistContext(new DistCalculation1());
    console.log(`Dist with strategy ${distContext.strategyName} ${distContext.executeLogic(A, B)}`);
    distContext.strategy = new DistCalculation2();
    console.log(`Dist with strategy ${distContext.strategyName} ${distContext.executeLogic(A, B)}`);
    distContext.strategy = new DistCalculation3();
    console.log(`Dist with strategy ${distContext.strategyName} ${distContext.executeLogic(A, B)}`);

    // 2
    const array: number[] = [];
    const length = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
    for(let i = 0; i < length; i++) {
        const ai = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        array.push(ai);
    }
    const arrayContext = new ArrayContext(new FindMedianElement());
    console.log(`\nArray: ${array} with strategy ${arrayContext.strategyName} ${arrayContext.executeLogic(array)}`);
    arrayContext.strategy = new FindAverageValue();
    console.log(`Array: ${array} with strategy ${arrayContext.strategyName} ${arrayContext.executeLogic(array)}`);
    arrayContext.strategy = new FindFrequentItem();
    console.log(`Array: ${array} with strategy ${arrayContext.strategyName} ${arrayContext.executeLogic(array)}`);
}

export function main() {
    console.log('* * * * * * * * * * Strategy pattern * * * * * * * * * *')
    demonstrateStrategyPattern();
    console.log('\n* * * * * * * * * * Template method pattern * * * * * * * * * *')
}
