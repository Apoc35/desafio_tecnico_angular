//interface para todos os personagens
import { Location } from './location';
import { Origin } from './origin.model';

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    episode: string[];
    image: string;
    url: string;
    created: string;
  }
