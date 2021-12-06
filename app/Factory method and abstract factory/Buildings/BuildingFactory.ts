import {IBuildingFactory} from "./IBuildingFactory";
import {Hospital} from "./Hospital";
import {School} from "./School";
import {Bank} from "./Bank";
import {IBank} from "./IBank";
import {ISchool} from "./ISchool";
import {IHospital} from "./IHospital";

export class BuildingFactory implements IBuildingFactory {
    public createHospital(): IHospital {
        const hospital = new Hospital();
        console.log(`${hospital.constructor.name} established by ${this.constructor.name}`);
        return hospital;
    }

    public createSchool(): ISchool {
        const school = new School();
        console.log(`${school.constructor.name} established by ${this.constructor.name}`);
        return school;
    }

    public createBank(): IBank {
        const bank = new Bank();
        console.log(`${bank.constructor.name} established by ${this.constructor.name}`);
        return bank;
    }
}
