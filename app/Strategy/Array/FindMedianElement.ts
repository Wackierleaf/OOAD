import {IArrayStrategy} from "./IArrayStrategy";

export class FindMedianElement implements IArrayStrategy {
    private _sortingRule(a: number, b: number): number {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    }

    execute(array: number[]): number {
        array.sort(this._sortingRule);
        const half = Math.floor(array.length / 2);
        if (array.length % 2) {
            return array[half];
        }
        return 0.5 * (array[half - 1] + array[half]);
    }
}
