import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Results } from '../models/results.model';



@Injectable({
  providedIn: 'root',
})
export class EpisodesRepository {

  constructor(
    private readonly httpClient: HttpClient,
  ){}

  public getCharacters():Observable<Results>{
    return this.httpClient.get<Results>
    ('https://rickandmortyapi.com/api/episode')
  }

}
