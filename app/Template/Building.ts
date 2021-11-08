export abstract class Building {
    private _address: string;
    private _floorsCount: number;

    protected constructor(address: string, floorsCount: number) {
        this._address = address;
        this._floorsCount = floorsCount;
    }

    protected set address(address: string) {
        this._address = address;
    }

    protected set floorsCount(count: number) {
        this._floorsCount = count;
    }

    public displayDescription(): void {
        console.log('GENERAL INFORMATION:\n');
        console.log(`\tAddress: ${this._address}`);
        console.log(`\tNumber of floors: ${this._floorsCount}`);
        console.log('ADDITIONAL INFORMATION:\n');
        this.displayDetailedDescription();
    }

    protected abstract displayDetailedDescription(): void;
}

