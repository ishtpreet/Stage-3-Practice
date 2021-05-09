import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { Department } from '../department';
import { Skill } from '../skill';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }
  //department
  department: Department = {
    id: 1, name:'FSE'
  };
  //Array of Departments
  departments: Department[] = [
    {id: 1, name:'Computer Vision'},
    {id: 2, name: 'Cryptography'},
    {id: 3, name: 'Automation'}
  ];
  //Skill
  skill: Skill[] = [
    {id: 1, name:'JavaScript'},
    {id: 2, name: 'Spring Boot'},
    {id: 3, name: 'NodeJS'}
  ];
  //Employee
  employee = this.employeeService.getEmployee(2);
  /*employee: Employee = {
    id: 1,
    name: 'Samrat',
    salary: 30000,
    isPermanent: true,
    department_id: this.department.id,
    department_name: this.department.name,
    skillArray: this.skill,
    dob: new Date('1999-08-28')
  };*/
  //Define form group property in component.ts as specified below
  empForm = new FormGroup({
      name: new FormControl(this.employee.name, [
      //write the validation logic over here
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)
    ]),
    salary: new FormControl(this.employee.salary, [Validators.required]),
    permanent: new FormControl(this.employee.isPermanent),
    department_emp: new FormControl(this.department)
  });
  //Include Getter Method for name.
  //This is for the validator to retrieve the value in the form field
  get name(){
    return this.empForm.get('name');
  }
  get salary(){
    return this.empForm.get('salary');
  } 
  get permanent(){
    return this.empForm.get('permanent');
  }
  get department_emp(){
    return this.empForm.get('department_emp');
  }
  //Create a new instance variable of FormControl
  //name1 = new FormControl(this.employee.name);
  

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.empForm);
  }

}
