import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap, filter } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  //Create the GET request
  getAllUsers() { 
    return this.http.get<User[]>("https://reqres.in/api/users?page=2");
  }
  //Create the POST request
  addUser(user: User){
    return this.http.post<User>("https://reqres.in/api/users?page=2",user);
  }
  //Create the PUT request
  updateUser(user: User) {
    return this.http.put<User>("https://reqres.in/api/users?page=2&id=${user.id}",user);
  }
  //Create the Delete Request
  deleteUser(id: number) {
    return this.http.delete("https://reqres.in/api/users?page=2&id=${id}");
  }
  //Create a register method
  register(user: User){
    return this.http.post("https://reqres.in/api/register", user).pipe(catchError((error:HttpErrorResponse) => {
      console.log(error.error);
      return throwError("Error checking successful");}));
  }
}
