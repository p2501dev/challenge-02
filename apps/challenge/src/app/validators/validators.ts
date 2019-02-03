import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isValidNumber(control: AbstractControl): ValidationErrors | null {
  const checkRegex = /^\d*\.*\d*$/.test(control.value);
  const result = checkRegex ? null : <ValidationErrors>{ invalidNumber: true };
  return result;
}
