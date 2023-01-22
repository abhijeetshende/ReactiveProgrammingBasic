import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.scss'],
})
export class TemplateformsComponent {
  @ViewChild('f') f!:NgForm;
  gender = 'Female';
  submitForm(form: NgForm) {
    console.log(form.value);
  }

  PatchValue() {
    // this.f.patchValue({
    //   userDetails: {
    //     email: 'patched',
    //     name: 'patched',
    //   },
    //   gender: 'Female',
    // });
    // this.f.

    
  }

  SetValue() {
    this.f.setValue({
      userDetails: {
        email: 'patched',
        name: 'patched',
      },
      gender: 'Female',
    });
  }
}
