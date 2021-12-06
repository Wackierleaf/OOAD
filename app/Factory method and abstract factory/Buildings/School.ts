import {IBuilding} from "./IBuilding";
import {ISchool} from "./ISchool";
import {BuildingCreator} from "./BuildingCreator";

export class School implements IBuilding, ISchool {
    material: string;
    purpose: string;

    constructor() {
        this.material = 'wood';
        this.purpose = 'teach children';
    }

    action(): string {
        // @ts-ignore
        return `${this.constructor.name} is teaches children`
    }

    educate() {
        console.log('Give education');
    }
}

export class SchoolCreator extends BuildingCreator {
    getBuilding(): IBuilding {
        return new School();
    }
}
