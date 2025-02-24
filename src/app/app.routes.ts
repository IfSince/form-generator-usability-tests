import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'scenario-1',
  },
  {
    path: 'scenario-1',
    loadComponent: () => import('./tests/first-scenario/first-scenario.component').then(c => c.FirstScenarioComponent),
    title: 'Szenario 1'
  },
  {
    path: 'scenario-2',
    loadComponent: () => import('./tests/second-scenario/second-scenario.component').then(c => c.SecondScenarioComponent),
    title: 'Szenario 2'
  },
  {
    path: 'scenario-3',
    loadComponent: () => import('./tests/third-scenario/third-scenario.component').then(c => c.ThirdScenarioComponent),
    title: 'Szenario 3'
  }
];
