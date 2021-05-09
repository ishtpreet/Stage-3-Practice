import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { Skill } from '../skill';
import { Employees } from './employee';
import { Employee } from '../employee';
@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee = new Employees(1, 'Vikrant', 30000, 'yes', 1, 'FSE');
  department: Department = {
    id: 1,
    name: 'FSE'
  };
  
  departments: Department[] = [
    { id: 1, name: 'Computer Vision' },
    { id: 2, name: 'Cryptography' },
    { id: 3, name: 'Automation' },
  ];

  skill: Skill[] = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Spring Boot' }
  ];
  emp: Employee = {
    id: 1,
    name: 'Vikrant',
    salary: 30000,
    isPermanent: true,
    //dateOfBirth: new Date('12/31/2000'),
    //department: this.department,
    department_id: this.department.id,
    department_name: this.department.name,
    skillArray: this.skill,
    dob: new Date('1999-10-18')
  }
  //id = 3;
  //name = "Vikrant";
  //salary = 30000;
  //isPermanent = true;
  //department_id = 1;
  //department_name = "FSE";
  //skillArray =  [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}];
  //dob : Date =  new Date("1999-10-18");
  onSubmit() {
    console.log(this.emp);
  }
}
