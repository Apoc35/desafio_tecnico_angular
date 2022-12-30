import { CharacterService } from 'src/app/services/character.service';
import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters()
    .pipe(take(1))
    .subscribe(response => {
      this.characters = response.results;
    });
  }

}
