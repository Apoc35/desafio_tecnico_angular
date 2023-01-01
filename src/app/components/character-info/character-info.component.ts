import { EpisodeService } from './../../services/episode.service';
import { Episode } from './../../models/episode.model';
import { take } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  public $character = this.characterService.$characterData.asObservable();
  public character!: Character;

  constructor(
    private readonly characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.$character.subscribe((value) => {
      this.character = value;
    })
  }

}
