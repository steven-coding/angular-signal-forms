import { Component } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

export const STEP_1_TITLE = 'Step 1 - Reactive-Form'

function futureDateValidator(control: AbstractControl): ValidationErrors | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const value = new Date(control.value);

  if (isNaN(value.getTime()) || value < today) {
    return { futureDateValidator: 'Must be today or in the future' };
  }

  return null;
}

@Component({
  selector: 'app-step1',
  templateUrl: './step1.html',
  imports: [ReactiveFormsModule, JsonPipe, KeyValuePipe],
})
export class Step1Component {

  protected readonly title: string = STEP_1_TITLE;

  protected taskForm = new FormGroup({
    description: new FormControl(
      '', 
      [
        Validators.required, 
        Validators.minLength(3)
    ]),
    when: new FormControl('',
      [ 
        Validators.required, 
        futureDateValidator
      ]),
    amount: new FormControl(
      0, 
      [
        Validators.min(3), 
        Validators.max(10)
      ]),
    done: new FormControl(false),
  });

}
