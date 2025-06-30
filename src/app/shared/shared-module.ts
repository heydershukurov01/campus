import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Header} from './layout/header/header';
import {FooterComponent} from './layout/footer/footer';
import {TitleOfInner} from './layout/title-of-inner/title-of-inner';



@NgModule({
  declarations: [
    Header,
    FooterComponent,
    TitleOfInner
  ],
  exports: [
    Header,
    FooterComponent,
    TitleOfInner
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
