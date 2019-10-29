import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from './interfaces/userresponse';
import { environment } from './environment';
import { map } from 'rxjs/operators';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users = [];
  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': `${environment.apiKey}`
    })
  };
  constructor(private http: HttpClient) {}

  getUsers(): Promise<any> {
    return this.http
      .get(`${environment.apiUrl}/members/email`, this.httpOptions)
      .pipe(
        map((response: UserResponse) => {
          return response.data;
        })
      )
      .toPromise();
  }

  addUser(user: User): Promise<any> {
    console.log(user);
    return this.http
      .post(`${environment.apiUrl}/members/email`, user, this.httpOptions)
      .toPromise();
  }
}
