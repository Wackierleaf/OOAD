import {IArrayStrategy} from "./IArrayStrategy";

export class FindAverageValue implements IArrayStrategy {
    private _reducer = (prev: number, curr: number) => prev + curr;

    execute(array: number[]): number {
        return array.reduce(this._reducer) / array.length;
    }
}
