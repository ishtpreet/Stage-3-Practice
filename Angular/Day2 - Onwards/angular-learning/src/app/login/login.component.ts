import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  msg:string = '';
  loginstatus:boolean;
  constructor(private _router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username === 'admin' && this.password === 'password'){
      //Navigate towards edit-emp-reactive route
      //this._router.navigate(['/edit-emp-reactive']);
      //Invoke authService.login() when Username and Password matches to 'admin'/'password'
      this.authService.login();
      this.loginstatus = this.authService.isLoggedIn();
    }else{
      this.msg = "Invalid Username/Password";
    }
  }
}
