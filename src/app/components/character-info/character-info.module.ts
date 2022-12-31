import { CharacterInfoRoutingModule } from './character-info.routing.module';
import { ContainerComponent } from './../../shared/container/container.component';
import { CharacterInfoComponent } from './character-info.component';
import { HomeRoutingModule } from './../home/home.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CharacterInfoComponent, ContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharacterInfoRoutingModule
  ],
  exports: [
    CharacterInfoComponent,
  ]
})
export class CharacterInfoModule { }
