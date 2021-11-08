import {IPoint} from "./Strategy/DistBetweenPoints/IPoint";
import {DistCalculation1} from "./Strategy/DistBetweenPoints/DistCalculation1";
import {DistContext} from "./Strategy/DistBetweenPoints/DistContext";
import {DistCalculation3} from "./Strategy/DistBetweenPoints/DistCalculation3";
import {DistCalculation2} from "./Strategy/DistBetweenPoints/DistCalculation2";
import {ArrayContext} from "./Strategy/Array/ArrayContext";
import {FindMedianElement} from "./Strategy/Array/FindMedianElement";
import {FindAverageValue} from "./Strategy/Array/FindAverageValue";
import {FindFrequentItem} from "./Strategy/Array/FindFrequentItem";
import {House} from "./Template/Realty/House";
import {IndustrialBuilding} from "./Template/Realty/IndustrialBuilding";
import {PublicBuilding} from "./Template/Realty/PublicBuilding";
import {PassengerCar} from "./Template/Cars/PassengerCar";
import {Truck} from "./Template/Cars/Truck";
import {PublicTransport} from "./Template/Cars/PublicTransport";

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
    console.log('* * * * * * * * * * Strategy pattern * * * * * * * * * *');

    // 1
    const A: IPoint = {x: 1, y: 3};
    const B: IPoint =  {x: -1, y: 2};
    const distContext = new DistContext(new DistCalculation1());
    console.log(`\nDist with strategy ${distContext.strategyName} ${distContext.executeLogic(A, B)}`);
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


/**
 * Вариант 1
 Используя шаблонный метод реализавать описанные здания
 абстрактный класс здание:
    Поля:
        1. адрес
        2. количество этажей
    методы:
        1. задать адрес
        2. задать количество этажей
        3. получить описание
 В получить описание вывести общее описание: адрес и этажность, а так же вывести подробное
 описание реализованое в наследниках.
    Наследники:
        1. жилой дом
        2. промышленное здание
        3. общественное здание
 Наследник содержит как минимум одно уникальное поле задаваемое при инициализации и выводимое
 в подробном описании.

 Вариант 2
 Используя шаблонный метод реализавать описание машины
 абстрактный класс здание:
    Поля:
        1. госномер
        2. производитель
    методы:
        1. задать госномер
        2. задать производителя
        3. получить описание
 В получить описание вывести общее описание: госномер и производитель, а так же вывести подробное
 описание реализованое в наследниках.
    Наследники:
        1. легковой автомобиль
        2. грузовой автомобиль
        3. общественный транспорт
 Наследник содержит как минимум одно уникальное поле задаваемое при инициализации и выводимое
 в подробном описаниие.
 */
function demonstrateTemplatePattern() {
    console.log('\n* * * * * * * * * * Template method pattern * * * * * * * * * *');

    // 1
    const myHouse = new House('Pupkin st', 3, 5);
    console.log(`Class name: ${myHouse.constructor.name}\n\n`);
    myHouse.displayDescription();
    const factory = new IndustrialBuilding('Revolution st', 10, true);
    console.log(`Class name: ${factory.constructor.name}\n\n`);
    factory.displayDescription();
    const shoppingСenter = new PublicBuilding('Lenina st', 6, ['food court', 'playground']);
    console.log(`Class name: ${shoppingСenter.constructor.name}\n\n`);
    shoppingСenter.displayDescription();

    // 2
    const fordCar = new PassengerCar('g123ty rus 36', 'Ford', 'qy7651');
    console.log(`Class name: ${fordCar.constructor.name}\n\n`);
    fordCar.displayDescription();
    const volvoTruck = new Truck('e213df rus 143', 'Volvo', 4)
    console.log(`Class name: ${volvoTruck.constructor.name}\n\n`);
    volvoTruck.displayDescription();
    const liazBus = new PublicTransport('e67jk rus 777', 'Liaz', 50);
    console.log(`Class name: ${liazBus.constructor.name}\n\n`);
    liazBus.displayDescription();
}

export function main() {
    // demonstrateStrategyPattern();
    demonstrateTemplatePattern();
}
