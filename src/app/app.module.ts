import { MainPageModule } from './components/main-page/main-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterCardComponent } from './shared/character-card/character-card.component';
import { ContainerComponent } from './shared/container/container.component';



@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    ContainerComponent,
  ],
  imports: [
    MainPageModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
