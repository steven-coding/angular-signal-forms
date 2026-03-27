import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { form, FormField, max, min, minLength, required, validate } from '@angular/forms/signals';

export const STEP_2_TITLE = 'Step 2 - Signal-Form'

interface TaskModel {
  description: string;
  when: string;
  amount: number;
  done: boolean;
}

@Component({
  selector: 'app-step2',
  templateUrl: './step2.html',
  imports: [FormField, JsonPipe],
})
export class Step2Component {
  protected readonly title: string = STEP_2_TITLE;

  protected readonly model = signal<TaskModel>({
    description: '',
    when: '',
    amount: 0,
    done: false,
  });

  protected readonly taskForm = form(this.model, (p) => {
    required(p.description);
    minLength(p.description, 3);

    required(p.when);
    validate(p.when, (ctx) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const value = new Date(ctx.value());
      if (isNaN(value.getTime()) || value < today) {
        return { kind: 'futureDateValidator', message: 'Must be today or in the future' };
      }
      return null;
    });

    min(p.amount, 3);
    max(p.amount, 10);
  });
}
