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

  /**
   * Retorna observable de characters
   * @param id Id do personagem clicado no HTML
   * @returns Retorna o personagem com o ID específico.
   */
  public getSingleCharacter(id: number): Observable<Character> {
    return this.charactersRepository.getSingleCharacter(id)
      .pipe(take(1));
  }

  /**
   * Retorna o personagem quando $characterData é assinado.
   * @param characterResponse Objeto do tipo Character.
   */
  public addCharacter(characterResponse: Character): void {
    this.$characterData.next(characterResponse);
  }

  /**
   *  Retorna a página quando $resultData é assinado.
   * @param resultResponse Objeto do tipo Results.
   */
  public addResults(resultResponse: Results): void {
    this.$resultData.next(resultResponse);
  }

  /**
   * Retorna o número de páginas e personagens por página.
   * @param pageNumber Número de páginas no total
   * @returns
   */
  public getPages(pageNumber: number): Observable<Results> {
    return this.charactersRepository.getCharactersByPage(pageNumber)
      .pipe(take(1));
  }
}
