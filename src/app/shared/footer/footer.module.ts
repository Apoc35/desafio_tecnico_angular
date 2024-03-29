import { ContainerModule } from './../container/container.module';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    ContainerModule,
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
