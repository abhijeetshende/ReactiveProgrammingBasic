import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  ngOnInit(): void {
    this.userFrom = new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      email: new FormControl(null,[Validators.email,Validators.required]),
      gender: new FormControl('Male'),
    });
  }
  userFrom!: FormGroup;
  submitForm() {
    console.log(this.userFrom.valid);

    console.log(this.userFrom.value);
  }
}
