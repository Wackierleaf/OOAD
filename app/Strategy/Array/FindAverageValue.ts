import {IStrategy} from "./IStrategy";

export class FindAverageValue implements IStrategy {
    private _reducer = (prev: number, curr: number) => prev + curr;

    execute(array: number[]): number {
        return array.reduce(this._reducer) / array.length;
    }
}
