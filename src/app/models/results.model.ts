import { Info } from './info.model';
import { Character } from 'src/app/models/character.model';


export interface Results {
  results: Character[];
  info: Info;
}
