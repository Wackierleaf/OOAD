import {Car} from "./Car";

export class PublicTransport extends Car {
    private _countOfSeats: number;

    constructor(
        licensePlate: string,
        manufacturer: string,
        countOfSeats: number,
    ) {
        super(licensePlate, manufacturer);
        this._countOfSeats = countOfSeats;
    }

    public displayDetailedDescription() {
        console.log(`\tCount of seats: ${this._countOfSeats}`);
    }
}
