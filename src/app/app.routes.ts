import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'scenario-1',
  },
  {
    path: 'scenario-1',
    loadComponent: () => import('./testing/test-view/test.view').then(c => c.TestView),
    title: 'Scenario 1'
  }
];
