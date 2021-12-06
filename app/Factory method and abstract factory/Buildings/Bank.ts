import {IBuilding} from "./IBuilding";
import {IBank} from "./IBank";
import {BuildingCreator} from "./BuildingCreator";

export class Bank implements IBuilding, IBank {
    material: string;
    purpose: string;

    constructor() {
        this.material = 'Concrete';
        this.purpose = 'Keep money';
    }

    public action(): string {
        // @ts-ignore
        return `${this.constructor.name} is keep money`;
    }

    public sendMoney() {
        console.log('Send money');
    }

}

export  class BankCreator extends BuildingCreator {
    public getBuilding(): IBuilding {
        return new Bank();
    }
}
