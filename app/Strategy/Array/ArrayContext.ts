import {IArrayStrategy} from "./IArrayStrategy";

export class ArrayContext {
    private _strategy: IArrayStrategy;

    constructor(strategy: IArrayStrategy) {
        this._strategy = strategy;
    }

    set strategy(strategy: IArrayStrategy) {
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
