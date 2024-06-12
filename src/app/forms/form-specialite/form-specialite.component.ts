
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { OnInit } from '@angular/core';


@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styles: ``
})

export class FormSpecialiteComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      'libelle': new FormControl(null),
    });
  }
  onSubmit() {

    localStorage.setItem('data', JSON.stringify(this.form.value));

  }
}
