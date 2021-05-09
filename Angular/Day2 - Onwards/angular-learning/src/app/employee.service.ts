import { Injectable } from '@angular/core';
import { Employee } from './employee';
//Import the Employee

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employeeList: Employee[] = [
    {
      id: 1,
      name: "Vikrant",
      salary: 30000,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1999-10-18")
    },
    {
      id: 2,
      name: "Sameer",
      salary: 23100,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1999-06-18")
    },
    {
      id: 3,
      name: "John",
      salary: 44000,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1994-10-08")
    },
    {
      id: 4,
      name: "Ritik",
      salary: 40000,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("2001-02-11")
    },
    {
      id: 5,
      name: "Hawkeye",
      salary: 16750,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1994-11-21")
    }];

    //create a method called getAllEmployees in this service class
    getAllEmployees(): Employee[]{
      return this.employeeList;
    }
    //Return employee based on its employeeId
    employee_return: Employee;
    getEmployee(employeeId: number): Employee{
      for(let emp of this.employeeList){
        if(emp.id === employeeId){
          this.employee_return = emp;
        }
      }
      return this.employee_return;
    }
}
