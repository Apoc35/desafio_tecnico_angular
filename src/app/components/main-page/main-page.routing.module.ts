import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";


// lazy loading
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeComponentModule)
  },
  {
    path: 'character-info',
    pathMatch: 'full',
    loadChildren: () => import('./../character-info/character-info.module').then(
        (m) => m.CharacterInfoModule
    ),
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class MainPageRoutingModule {

}
