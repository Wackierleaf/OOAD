import {Car} from "./Car";

export class Truck extends Car {
    private  _axlesCount: number;

    constructor(
        licensePlate: string,
        manufacturer: string,
        axlesCount: number,
    ) {
        super(licensePlate, manufacturer);
        this._axlesCount = axlesCount;
    }

    public displayDetailedDescription() {
        console.log(`\tCount of axles: ${this._axlesCount}`);
    }
}
