import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { STEP_1_TITLE } from '../../steps/step1/step1';
import { STEP_2_TITLE } from '../../steps/step2/step2';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class ShellComponent {
  steps = [
    { path: 'step1', label: STEP_1_TITLE },
    { path: 'step2', label: STEP_2_TITLE },
  ];
}
