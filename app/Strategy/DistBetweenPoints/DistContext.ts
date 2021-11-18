import {IDistStrategy} from "./IDistStrategy";
import {IPoint} from "./IPoint";

export class DistContext {
    private _strategy: IDistStrategy;

    constructor(strategy: IDistStrategy) {
        this._strategy = strategy;
    }

    set strategy(strategy: IDistStrategy) {
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
