import {IBuilding} from "./IBuilding";

export abstract class BuildingCreator {

    public abstract getBuilding(): IBuilding;

    public doAction(): string {
        const building = this.getBuilding();
        return `Building creator: The same creator's code has just worked with ${building.action()}`;
    }

}
