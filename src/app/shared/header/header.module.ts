import { ContainerModule } from './../container/container.module';
import { HeaderComponent } from './../../shared/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ContainerModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
