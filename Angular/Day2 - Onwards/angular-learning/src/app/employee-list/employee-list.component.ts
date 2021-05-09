import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Department } from '../department';
import { Skill } from '../skill';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Create the EmployeeList with five employee objects
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
      name: "Sumit",
      salary: 23100,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1998-06-28")
    },
    {
      id: 3,
      name: "Jay",
      salary: 44000,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1994-07-08")
    },
    {
      id: 4,
      name: "Amit",
      salary: 40000,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1997-01-11")
    },
    {
      id: 5,
      name: "Steve",
      salary: 16750,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1994-12-31")
    }];
    //Provide the SearchKey
    searchKey = '';
    //Create a Skills array
    skills: Skill[] = [
      {id : 1, name : "Java"}, {id : 2, name : "Spring"}, {id : 3, name : "JavaScript"}
    ];
    //Create the Departments array
    departments: Department[] = [
      {id : 1, name : "PayRoll"}, {id : 2, name : "Human Resources"}, {id : 3, name : "Development"}
    ];
    fin = '';
    filteredEmployees: Employee[];
    //Create the search method
    search(event): void {
      this.fin = event.target.value;
      this.filteredEmployees = this.employeeList.filter(name => name.name.includes(this.fin))
    }
}
