import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import {Home} from './components/home/home';
import {HeroVideo} from '../shared/layout/hero-video/hero-video';
import {Intro} from './components/intro/intro';
import {Programmes} from './components/programmes/programmes';
import {WhyCome} from './components/why-come/why-come';
import {RegistrationBanner} from './components/registration-banner/registration-banner';
import { ContactDetails } from './components/contact-details/contact-details';
import { CampusLocation } from './components/campus-location/campus-location';
import {SharedModule} from '../shared/shared-module';


@NgModule({
  declarations: [
    Home,
    Intro,
    Programmes,
    WhyCome,
    RegistrationBanner,
    ContactDetails,
    CampusLocation,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HeroVideo,
  ]
})
export class HomeModule { }
