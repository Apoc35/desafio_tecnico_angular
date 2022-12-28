import { Episode } from './episode';

export interface  Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    episode: Episode[];
    image: string;
    url: string;
    created: string;
  }
