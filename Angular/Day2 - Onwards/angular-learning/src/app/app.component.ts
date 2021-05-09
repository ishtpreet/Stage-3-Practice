import { Component } from '@angular/core';
import {Employee as employee} from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  favouriteMovie =  "Lord of the Rings";
  //Implement Employee interface here
  id = 3;
  name = "Vikrant";
  salary = 30000;
  isPermanent = true;
  department_id = 1;
  department_name = "FSE";
  skillArray =  [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}];
  dob : Date =  new Date("1999-10-18");
}
