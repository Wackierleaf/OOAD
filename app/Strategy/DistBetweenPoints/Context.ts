import {IStrategy} from "./IStrategy";

export class Context {
    private _strategy: IStrategy<any, any>;

    constructor(strategy: IStrategy<any, any>) {
        this._strategy = strategy;
    }

    set strategy(strategy: IStrategy<any, any>) {
        this._strategy = strategy;
    }

    public executeLogic<ParamType, ReturnType>(param: ParamType): ReturnType {
        return this.strategy.execute(param);
    }
}
