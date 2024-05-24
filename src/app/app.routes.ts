import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'different-route',
    loadComponent: () => import('./different-route/different-route.page').then( m => m.DifferentRoutePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
