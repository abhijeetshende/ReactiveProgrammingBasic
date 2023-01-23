import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrls: ['./httpexample.component.scss']
})
export class HttpexampleComponent implements OnInit {
  constructor(private http:HttpClient,private users:UsersService){

  }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl(null),
      location:new FormControl(null),
      age:new FormControl(null),
    })
    this.getUsers();
  }
  userForm!:FormGroup;
  userArray:User[] =[];
  addUser(){
      this.users.addUser(this.userForm.value).subscribe((res)=>{
        console.log(res);
      })
  }
  getUsers(){
    this.users.getUser().subscribe((res)=>{
      console.log(res);

      setTimeout(()=>{
        this.users.deleteUser().subscribe((data)=>{
          console.log(data);
          
        },(err:Error)=>{
          alert(err.message)
        });
      },5000)
      // this.userArray = ;
    })
}
}
