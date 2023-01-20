import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css'],
})
export class FormErrorComponent {
  @Input('formControl')
  formControl!: AbstractControl;

  @Input('label')
  label: string = 'Campo';
}
