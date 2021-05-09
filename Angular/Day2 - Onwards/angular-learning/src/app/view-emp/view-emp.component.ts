import { Component, OnInit } from '@angular/core';
import {Employee as employee} from '../employee';
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id = 3;
  name = "Vikrant";
  salary = 30000;
  isPermanent = true;
  department_id = 1;
  department_name = "FSE";
  skillArray =  [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}];
  dob : Date =  new Date("1999-10-18");
}
