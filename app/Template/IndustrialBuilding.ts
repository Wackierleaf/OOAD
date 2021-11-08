import {Building} from "./Building";

export class IndustrialBuilding extends Building {
    private _productionPermit: boolean;

    constructor(
        address: string,
        floorsCount: number,
        productionPermit: boolean,
    ) {
        super(address, floorsCount);
        this._productionPermit = productionPermit;
    }

    public displayDetailedDescription() {
        console.log(`\tProduction permit: ${this._productionPermit}`);
    }
}
