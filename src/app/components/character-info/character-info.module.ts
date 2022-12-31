import { CharacterInfoComponent } from './character-info.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { CharacterCardComponent } from './../../shared/character-card/character-card.component';
import { HomeRoutingModule } from './../home/home.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CharacterCardComponent, HeaderComponent, CharacterInfoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    CharacterInfoComponent,
  ]
})
export class CharacterInfoModule { }
