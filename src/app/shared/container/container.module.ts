import { ContainerComponent } from './container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }
