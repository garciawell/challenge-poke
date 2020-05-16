import { IPokeModel } from './models';

export enum PokeActionTypes {
  GET_POKE = 'pokemon/GET_POKE',
  GET_POKE_SUCCESS = 'pokemon/GET_POKE_SUCCESS',
}

export interface IGetPoke {
  type: PokeActionTypes.GET_POKE;
}

export interface IGetPokeSuccess {
  type: PokeActionTypes.GET_POKE_SUCCESS;
  payload: IPokeModel;
}

export function getPokes(): IGetPoke {
  return {
    type: PokeActionTypes.GET_POKE,
  };
}

export function getPokesSuccess(data: IPokeModel): IGetPokeSuccess {
  return {
    type: PokeActionTypes.GET_POKE_SUCCESS,
    payload: data,
  };
}

export type PokeAction = IGetPoke | IGetPokeSuccess;
