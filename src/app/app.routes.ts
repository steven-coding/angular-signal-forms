import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell/shell').then((m) => m.ShellComponent),
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      {
        path: 'step1',
        loadComponent: () => import('./steps/step1/step1').then((m) => m.Step1Component),
      },
      {
        path: 'step2',
        loadComponent: () => import('./steps/step2/step2').then((m) => m.Step2Component),
      },
    ],
  },
];
