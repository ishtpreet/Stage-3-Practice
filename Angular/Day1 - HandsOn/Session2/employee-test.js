"use strict";
exports.__esModule = true;
//import {SkillList as skill} from "./Skill";
var employeeImpl = {
    id: 101,
    name: "John Stoke",
    salary: 28500,
    isPermanent: true,
    department_id: 1,
    department_name: "Payroll",
    //skillArray.push({id: 1, name:"HTML"}),
    skillArray: [{ id: 1, name: "HTML" }, { id: 2, name: "CSS" }, { id: 3, name: "JavaScript" }]
};
console.log("id: " + employeeImpl.id);
console.log("name: " + employeeImpl.name);
console.log("salary: " + employeeImpl.salary);
console.log("permanent: " + employeeImpl.isPermanent);
console.log("department id: " + employeeImpl.department_id);
console.log("department name: " + employeeImpl.department_name);
//Iterate through the the array and print the details..
for (var i = 0; i < employeeImpl.skillArray.length; i++) {
    console.log("skill[" + i + "]:" + employeeImpl.skillArray[i].id + ", " + employeeImpl.skillArray[i].name);
}
