import { Character } from 'src/app/models/character.model';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  public characters: Character[] = [];

  constructor (private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters()
    .pipe(take(1))
    .subscribe(response => {
      this.characters = response.results;
    });
  }
}

