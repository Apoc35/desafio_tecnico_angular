import { Character } from './character';

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode:  string;
  character: Character;
  url: string;
  created: string;
}
