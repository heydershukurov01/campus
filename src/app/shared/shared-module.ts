import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Header} from './layout/header/header';
import {FooterComponent} from './layout/footer/footer';
import {TitleOfInner} from './layout/title-of-inner/title-of-inner';
import {Hero} from './layout/hero/hero';



@NgModule({
  declarations: [
    Header,
    FooterComponent,
    TitleOfInner,
    Hero
  ],
  exports: [
    Header,
    FooterComponent,
    TitleOfInner,
    Hero
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
