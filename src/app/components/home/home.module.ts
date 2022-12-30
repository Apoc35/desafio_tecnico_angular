import { ContainerComponent } from './../../shared/container/container.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';


@NgModule({
  declarations: [HomeComponent, ContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeComponentModule { }
