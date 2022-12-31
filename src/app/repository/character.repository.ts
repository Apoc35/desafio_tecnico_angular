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

  public getCharacters():Observable<Results>{
    return this.httpClient.get<Results>
    ('https://rickandmortyapi.com/api/character/')
  }

  public getSingleCharacter(character: number):Observable<Results>{
    return this.httpClient.get<Results>
    (`https://rickandmortyapi.com/api/character/${character}`)
  }

}
