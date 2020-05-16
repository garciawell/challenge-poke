export interface IPokeModel {
  name: string;
  url: string;
}

export enum ApiStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
  FAILED = 'failed',
}
