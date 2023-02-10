import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { samePasswordErrorValidator } from '../same-password-error-validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  formGroup = new FormGroup({
    // Validators são validações comuns que podem ser aplicadas aos componentes
    login: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    new_password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    same_password: new FormControl('', [
      // Possível criar Validators customizados
      samePasswordErrorValidator('new_password'),
    ]),
  });
  // Getters que permitem acessar o valor do componente no FormGroup diretamente
  get name() {
    return this.formGroup.get('name');
  }
  get login() {
    return this.formGroup.get('login');
  }
  get new_password() {
    return this.formGroup.get('new_password');
  }
  get same_password() {
    return this.formGroup.get('same_password');
  }

  onSave() {
    console.log(this.formGroup.value);
  }

  constructor() {
    this.formGroup.controls.new_password.valueChanges.subscribe(() => {
      this.formGroup.controls.same_password.updateValueAndValidity();
    });
  }
}
