import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatIsCampusExperienceRoutingModule } from './what-is-campus-experience-routing-module';
import { WhatIsCampusExperience } from './what-is-campus-experience/what-is-campus-experience';
import {HeroVideo} from '../shared/layout/hero-video/hero-video';
import {SharedModule} from '../shared/shared-module';
import { DetailedCampusExperience } from './detailed-campus-experience/detailed-campus-experience';


@NgModule({
  declarations: [
    WhatIsCampusExperience,
    DetailedCampusExperience
  ],
  imports: [
    CommonModule,
    WhatIsCampusExperienceRoutingModule,
    HeroVideo,
    SharedModule
  ]
})
export class WhatIsCampusExperienceModule { }
