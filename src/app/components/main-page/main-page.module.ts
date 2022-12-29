import { MainPageComponent } from './main-page.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page.routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    RouterModule,
    CommonModule,
    MainPageRoutingModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
