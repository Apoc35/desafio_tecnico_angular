
import { take } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Results } from '../models/results.model';
import { EpisodesRepository } from '../repository/episode.repository';

@Injectable({ providedIn: 'root' })

export class EpisodeService {


  constructor( private readonly episodesRepository: EpisodesRepository) {}

  //método para requisição de todos os personagens
  getAllCharacters(): Observable<Results> {
    return this.episodesRepository.getCharacters()
      .pipe(take(1));
  }


}
