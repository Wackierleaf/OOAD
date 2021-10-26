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

    public executeLogic(A: IPoint, B: IPoint): number {
        return this.strategy.execute(A, B);
    }
}
