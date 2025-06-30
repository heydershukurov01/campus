import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WhatIsCampusExperience} from './what-is-campus-experience/what-is-campus-experience';

const routes: Routes = [
  {path: '', component: WhatIsCampusExperience}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatIsCampusExperienceRoutingModule { }
