import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home-module').then(m => m.HomeModule)},
  {path: 'what-is-campus-experience', loadChildren: () => import('./what-is-campus-experience/what-is-campus-experience-module').then(m => m.WhatIsCampusExperienceModule)},

];
