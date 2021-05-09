import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataObject: Object = {page: "", per_page:"", total:"", total_pages:"", data: [], support: {url:"",text:""}};
  viewStatus: boolean = false;
  addStatus: boolean = false;
  deleteStatus: boolean = false;
  updateStatus: boolean = false;
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  //View Users
  //GET Request
  viewUsers(): void {
    this.viewStatus = true;
    this.addStatus = false;
    this.deleteStatus = false;
    this.updateStatus = false;
    this.userService.getAllUsers().subscribe( (dataObject: any) => {
        this.users = dataObject.data;
        console.log(this.users);
      });
  }
  //Add Users
  //POST Request
  addUser(): void {
    this.viewStatus = false;
    this.addStatus = true;
    this.deleteStatus = false;
    this.updateStatus = false;
    let user: User = {"id":31,"email":"vikrant.tufani@gmail.com","first_name":"Vikrant","last_name":"Tufani","avatar":"https://reqres.in/img/faces/7-image.jpg"};
    this.userService.addUser(user).subscribe( (user: User) => {
        this.users.push(user);
    });  
  }
  //Delete Users
  //DELETE Request
  deleteUser(): void {
    this.viewStatus = false;
    this.addStatus = false;
    this.deleteStatus = true;
    this.updateStatus = false;
    let id: number = 29;
    this.userService.deleteUser(id).subscribe( _ => console.log("Delete working fine"));
  }
  //Update Users
  //PUT request
  updateUser(): void {
    this.viewStatus = false;
    this.addStatus = false;
    this.deleteStatus = false;
    this.updateStatus = true;
    let user:User = {"id":7,"email":"micky21@gmail.com","first_name":"Raman","last_name":"Bhola","avatar":""};
    this.userService.updateUser(user).subscribe(_ => console.log("Put working fine"));
  }
  //Register Users
  register(): void {
    let user: User = { id: 0, email: "", first_name: "", last_name:"",avatar:"" };
    this.userService.register(user).subscribe();
  }
}
