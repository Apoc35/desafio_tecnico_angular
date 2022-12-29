import { CharactersRepository } from './../repository/character.repository';
import { take } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Results } from '../models/results.model';

@Injectable({ providedIn: 'root' })

export class CharacterService {


  constructor( private readonly charactersRepository: CharactersRepository) {}

  //método para requisição de todos os personagens
  getAllCharacters(): Observable<Results> {
    return this.charactersRepository.getCharacters()
      .pipe(take(1));
  }


}
