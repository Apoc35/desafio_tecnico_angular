import { Character } from 'src/app/models/character.model';
import { CharactersRepository } from './../repository/character.repository';
import { ReplaySubject, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Results } from '../models/results.model';

@Injectable({ providedIn: 'root' })

export class CharacterService {

  public readonly $characterData = new ReplaySubject<Character>(1);
  public readonly $resultData = new ReplaySubject<Results>(1);

  constructor( private readonly charactersRepository: CharactersRepository) {}

  /**
   *
   * @returns Retorna observable de results
   */
  public getAllCharacters(): void {
    this.charactersRepository.getCharacters()
      .pipe(take(1)).subscribe(response => {
        this.addResults(response);
      });
  }

  public getSingleCharacter(id: number): Observable<Character> {
    return this.charactersRepository.getSingleCharacter(id)
      .pipe(take(1));
  }
  public addCharacter(characterResponse: Character): void {
    this.$characterData.next(characterResponse);
  }
  public addResults(resultResponse: Results): void {
    this.$resultData.next(resultResponse);
  }

  public getPages(pageNumber: number): Observable<Results> {
    return this.charactersRepository.getCharactersByPage(pageNumber)
      .pipe(take(1));
  }
}
