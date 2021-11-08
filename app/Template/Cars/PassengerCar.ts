import {Car} from "./Car";

export class PassengerCar extends Car {
    private _trailerLicensePlate: string;

    constructor(
        licensePlate: string,
        manufacturer: string,
        trailerLicensePlate: string,
        ) {
        super(licensePlate, manufacturer);
        this._trailerLicensePlate = trailerLicensePlate;
    }

    public displayDetailedDescription() {
        console.log(`\tTrailer license plate: ${this._trailerLicensePlate}`);
    }
}
