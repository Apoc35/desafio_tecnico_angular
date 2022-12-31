import { ContainerModule } from './../../shared/container/container.module';
import { CharacterInfoRoutingModule } from './character-info.routing.module';
import { CharacterInfoComponent } from './character-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CharacterInfoComponent],
  imports: [
    CommonModule,
    CharacterInfoRoutingModule,
    ContainerModule
  ],
  exports: [
    CharacterInfoComponent,
  ]
})
export class CharacterInfoModule { }
