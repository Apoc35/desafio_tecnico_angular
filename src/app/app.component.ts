import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Character } from './models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-app';

  characters: Character[] = [];

  constructor (private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters()
      .subscribe(characters => {
        this.characters = characters;
        console.log(this.characters);
      });
  }
}
