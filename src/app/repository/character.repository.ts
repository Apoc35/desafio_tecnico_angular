import { Character } from 'src/app/models/character.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Results } from '../models/results.model';



@Injectable({
  providedIn: 'root',
})
export class CharactersRepository {

  constructor(
    private readonly httpClient: HttpClient,
  ){}

  /**
   * Chamada para a API requisitando todos os personagens.
   * @returns
   */
  public getCharacters():Observable<Results>{
    return this.httpClient.get<Results>
    ('https://rickandmortyapi.com/api/character/')
  }

  /**
   * Chamada para a API requisitando um personagem específico por ID.
   * @param character Objeto do tipo Character.
   * @returns
   */
  public getSingleCharacter(character: number):Observable<Character>{
    return this.httpClient.get<Character>
    (`https://rickandmortyapi.com/api/character/${character}`)
  }

  /**
   * Chamada para a API requisitando uma página específica.
   * @param pageNumber Objeto do tipo Results
   * @returns
   */
  public getCharactersByPage(pageNumber: number):Observable<Results>{
    return this.httpClient.get<Results>
    (`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
  }
}
