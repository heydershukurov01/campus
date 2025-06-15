import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import {Home} from './components/home/home';
import {Header} from '../shared/layout/header/header';
import {Hero} from '../shared/layout/hero/hero';
import {HeroVideo} from '../shared/layout/hero-video/hero-video';
import {Intro} from './components/intro/intro';
import {Programmes} from './components/programmes/programmes';
import {WhyCome} from './components/why-come/why-come';
import {RegistrationBanner} from './components/registration-banner/registration-banner';


@NgModule({
  declarations: [
    Home,
    Intro,
    Programmes,
    WhyCome,
    RegistrationBanner,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Header,
    Hero,
    HeroVideo,
  ]
})
export class HomeModule { }
