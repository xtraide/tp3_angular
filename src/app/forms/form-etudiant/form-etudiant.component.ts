import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { OnInit } from '@angular/core';


@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styles: ``
})
export class FormEtudiantComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'nom': new FormControl(null),
      'prenom': new FormControl(null),
      'rue': new FormControl(null),
      'cp': new FormControl(null),
      'ville': new FormControl(null),
      'courriel': new FormControl(null),
      'genre': new FormControl(null),
      'age': new FormControl(null),
      'idCandi': new FormControl(null),
    });
  }

  onSubmit() {

    localStorage.setItem('data', JSON.stringify(this.form.value));

  }

}
