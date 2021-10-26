import {IStrategy} from "./IStrategy";
import {IPoint} from "./IPoint";

export class Context {
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

    public executeLogic(A: IPoint, B: IPoint): number {
        return this._strategy.execute(A, B);
    }
}
