import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {
  static phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^(8|\+7)\d{10}$/.test(control.value);
    return result ? null : { phone: {value: control.value} };
  }
}
