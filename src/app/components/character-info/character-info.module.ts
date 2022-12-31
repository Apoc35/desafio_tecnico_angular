import { CharacterInfoComponent } from './character-info.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { HomeRoutingModule } from './../home/home.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HeaderComponent, CharacterInfoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    CharacterInfoComponent,
  ]
})
export class CharacterInfoModule { }
