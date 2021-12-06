import {IBuilding} from "./IBuilding";
import {IHospital} from "./IHospital";
import {BuildingCreator} from "./BuildingCreator";

export class Hospital implements IBuilding, IHospital {
    material: string;
    purpose: string;

    constructor() {
        this.material = 'bricks';
        this.purpose = 'heal people';
    }

    public action(): string {
        // @ts-ignore
        return `${this.constructor.name} is heal people`;
    }

    public healPerson() {
        console.log('Heal person')
    }
}

export class HospitalCreator extends BuildingCreator {
    public getBuilding(): IBuilding {
        return new Hospital();
    }
}
