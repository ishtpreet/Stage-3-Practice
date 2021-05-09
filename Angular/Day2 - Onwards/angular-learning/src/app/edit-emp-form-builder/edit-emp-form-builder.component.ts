import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { Department } from '../department';
import { Skill } from '../skill';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {
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
  employee: Employee = {
    id: 1,
    name: 'Vikrant',
    salary: 30000,
    isPermanent: true,
    department_id: this.department.id,
    department_name: this.department.name,
    skillArray: this.skill,
    dob: new Date('1999-10-18')
  };
  //Define form group property in component.ts as specified below
  empForm = this.fb.group({
      name: [this.employee.name, Validators.required],
      //write the validation logic over here
      /*,Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)],*/
    salary: [this.employee.salary, Validators.required],
    permanent: [this.employee.isPermanent],
    department_emp: [this.department],
    skills: this.fb.array([
      this.fb.control(this.employee.skillArray)
    ])
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
  //Injecting the FormBuilder in Constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.empForm);
  }
}
