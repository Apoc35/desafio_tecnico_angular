import { ContainerModule } from './../../shared/container/container.module';
import { CharacterCardComponent } from './../../shared/character-card/character-card.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent, CharacterCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContainerModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeComponentModule {
}
