import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';

@Injectable({ providedIn: 'root' })

export class CharacterService {
  readonly endpoint = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>
      ('https://rickandmortyapi.com/api/character/')
        .pipe(map(response => response.results));
  }

}
