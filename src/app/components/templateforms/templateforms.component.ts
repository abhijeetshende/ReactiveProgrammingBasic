import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.scss'],
})
export class TemplateformsComponent {
  submitForm(form: NgForm) {
    console.log(form);
  }
}
