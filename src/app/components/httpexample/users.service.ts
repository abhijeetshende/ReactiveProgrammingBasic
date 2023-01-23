import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  name: string;
  city: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = '/api';
  constructor(private http: HttpClient) {}
  addUser(user: User) {
    return this.http.post(this.url, user);
  }
  getUser() {
    let queryParams = new HttpParams()
    queryParams.set('hello','world')
    queryParams.set('hello2','world2')
    let customHeader = new HttpHeaders().set('hello','worldHhhhhhhhhhahhahahahah')
    return this.http.get(this.url, {
      observe: 'response',
      headers:customHeader,
      params:queryParams
    });
  }
  deleteUser() {
    return this.http.delete(this.url);
  }
}
