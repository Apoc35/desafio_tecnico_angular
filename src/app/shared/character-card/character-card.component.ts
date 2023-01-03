import { Character } from 'src/app/models/character.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  @Input() character!: Character;
  @Output() clickCharacter = new EventEmitter<Character>();

  /**
   * Emissão de evento para o componente pai (character-info).
   */
  public OnClickCharacter(): void {
    this.clickCharacter.emit(this.character);
  }

}

