import {IStrategy} from "./IStrategy";

export class ArrayContext {
    private _strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this._strategy = strategy;
    }

    set strategy(strategy: IStrategy) {
        this._strategy = strategy;
    }

    get strategyName() {
        // @ts-ignore
        return this._strategy.constructor.name;
    }

    public executeLogic(array: number[]): number {
        return this._strategy.execute(array);
    }
}
