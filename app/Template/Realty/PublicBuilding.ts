import {Building} from "./Building";

export class PublicBuilding extends Building {
    private _publicSpaces: string[];

    constructor(
        address: string,
        floorsCount: number,
        publicSpaces: string[],
    ) {
        super(address, floorsCount);
        this._publicSpaces = publicSpaces;
    }

    public displayDetailedDescription() {
        console.log(`\tPublic spaces: \n\t\t${this._publicSpaces.join('\n\t\t')}`);
    }
}
