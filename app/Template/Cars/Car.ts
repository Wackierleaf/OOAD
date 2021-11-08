export abstract class Car {
    private _licensePlate: string;
    private _manufacturer: string;

    protected constructor(licensePlate: string, manufacturer: string) {
        this._licensePlate = licensePlate;
        this._manufacturer = manufacturer;
    }

    public set licensePlate(str: string) {
        this._licensePlate = str;
    }

    public set manufacturer(name: string) {
        this._manufacturer = name;
    }

    public displayDescription(): void {
        console.log('GENERAL INFORMATION:\n');
        console.log(`\tLicense plate: ${this._licensePlate}`);
        console.log(`\tManufacturer: ${this._manufacturer}`);
        console.log('ADDITIONAL INFORMATION:\n');
        this.displayDetailedDescription();
        console.log('\n');
    }

    protected abstract displayDetailedDescription(): void;
}
