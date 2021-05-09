import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean;
  constructor() { }
  //This method set the loggedIn variable to true
  login(){
    this.loggedIn = true;
  }
  //This method set the loggedIn variable to false
  logout(){
    this.loggedIn = false;
  }
  isLoggedIn():boolean{
    return this.loggedIn;
  }
}
