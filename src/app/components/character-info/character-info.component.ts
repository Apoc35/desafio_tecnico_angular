import { take } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  public $character = this.characterService.$characterData.asObservable();
  public character: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: { name: '', url: '' },
    location: { id: 0, name: '' },
    episode: [],
    image: '',
    url: '',
    created: ''
  };

  constructor(
    private readonly characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.$character.pipe(take(1)).subscribe((value) => {
      this.character = value;
    })
  }

}
