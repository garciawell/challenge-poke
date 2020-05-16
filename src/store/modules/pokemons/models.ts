export interface IPokeTypes {
  slot: number;
  type: {
    name: string;
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
  FAILED = 'failed',
}
