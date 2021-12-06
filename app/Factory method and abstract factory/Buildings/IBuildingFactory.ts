import {ISchool} from "./ISchool";
import {IBank} from "./IBank";
import {IHospital} from "./IHospital";

export interface IBuildingFactory {
    createSchool(): ISchool;
    createBank(): IBank;
    createHospital(): IHospital;
}
