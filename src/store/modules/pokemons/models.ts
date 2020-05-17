export interface IPokeTypes {
  slot: number;
  type: {
    name:
      | 'grass'
      | 'fire'
      | 'water'
      | 'bug'
      | 'normal'
      | 'poison'
      | 'electric'
      | 'ground'
      | 'fairy'
      | 'fighting'
      | 'flying'
      | 'rock';
    url: string;
  };
}

export interface IPokeModel {
  name: string;
  url: string;
  id: number;
  img: string;
  types: IPokeTypes[];
}

export enum ApiStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
}
