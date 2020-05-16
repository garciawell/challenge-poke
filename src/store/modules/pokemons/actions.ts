import { IPokeModel } from './models';

export enum PokeActionTypes {
  GET_POKE = 'pokemon/GET_POKE',
  GET_POKE_SUCCESS = 'pokemon/GET_POKE_SUCCESS',
}

interface IGetPoke {
  type: PokeActionTypes.GET_POKE;
  payload: number;
}

interface IGetPokeSuccess {
  type: PokeActionTypes.GET_POKE_SUCCESS;
  payload: {
    data: IPokeModel[];
    pagination: number;
  };
}

export const Creators = {
  getPokes(value: number): IGetPoke {
    return {
      type: PokeActionTypes.GET_POKE,
      payload: value,
    };
  },
  getPokesSuccess(data: IPokeModel[], pagination: number): IGetPokeSuccess {
    return {
      type: PokeActionTypes.GET_POKE_SUCCESS,
      payload: { data, pagination },
    };
  },
};

export type IPokeAction = IGetPoke | IGetPokeSuccess;
