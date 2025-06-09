import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import {Home} from './components/home/home';
import {Header} from '../shared/layout/header/header';
import {Hero} from '../shared/layout/hero/hero';
import {HeroVideo} from '../shared/layout/hero-video/hero-video';


@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Header,
    Hero,
    HeroVideo
  ]
})
export class HomeModule { }
