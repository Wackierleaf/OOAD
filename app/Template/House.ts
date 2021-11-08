import {Building} from "./Building";

export class House extends Building {
    private _roomsCount: number;

    constructor(
        address: string,
        floorsCount: number,
        roomsCount: number,
    ) {
        super(address, floorsCount);
        this._roomsCount = roomsCount;
    }

    public displayDetailedDescription() {
        console.log(`\tRooms count: ${this._roomsCount}`);
    }
}
