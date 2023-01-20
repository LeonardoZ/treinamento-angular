import { AbstractControl, ValidationErrors } from '@angular/forms';

export function samePasswordErrorValidator(passwordField: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const notTheSame =
      control.parent?.get(passwordField)?.value !== (control.value as string);
    return notTheSame ? { samePasswordError: { value: control.value } } : null;
  };
}
