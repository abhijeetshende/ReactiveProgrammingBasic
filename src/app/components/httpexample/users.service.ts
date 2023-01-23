import { HttpClient } from '@angular/common/http';
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
    return this.http.get(this.url);
  }
  deleteUser(){
    return this.http.delete(this.url);
  }
}
