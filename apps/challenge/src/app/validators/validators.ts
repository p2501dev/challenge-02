import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isValidNumber(control: AbstractControl): ValidationErrors | null {
  const checkPatternFloat = /^-?\d+\.*\d*$/.test(control.value);
  const checkEndsWithPoint = /\.{1}$/.test(control.value);
  const result =
    checkPatternFloat && !checkEndsWithPoint ? null : <ValidationErrors>{ invalidNumber: true };
  return result;
}
