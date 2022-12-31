import { CharacterInfoComponent } from './character-info.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: CharacterInfoComponent,
  },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class CharacterInfoRoutingModule { }
