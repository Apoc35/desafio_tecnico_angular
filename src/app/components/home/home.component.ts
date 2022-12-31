import { CharacterService } from 'src/app/services/character.service';
import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public characters: Character[] = [];

  constructor(
    private characterService: CharacterService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters()
    .pipe(take(1))
    .subscribe(response => {
      this.characters = response.results;
    });
  }

  public getOneCharacter(character: Character) {
    this.characterService.getSingleCharacter(character.id).pipe(take(1)).subscribe((response) => {
      this.characterService.addCharacter(response);
    });
    void this.router.navigate(['character-info']);
  }

}
