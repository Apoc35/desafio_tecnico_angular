import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";


// lazy loading
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeComponentModule)
  },

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class MainPageRoutingModule {

}
