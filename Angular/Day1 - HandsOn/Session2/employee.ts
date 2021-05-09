import {Department as department} from "./department";
import {Skill as skill} from "./skill";
export interface Employee extends department{
    id : number,
    name: string,
    salary: number,
    isPermanent: boolean,
    department_id: number
    department_name: string
    skillArray: skill[]
};