import produce from 'immer';
import { ApiStatus, IPokeModel } from './models';
import { IPokeAction, PokeActionTypes } from './actions';

export interface IPokemonState {
  loadingStatus: ApiStatus;
  pokes: IPokeModel[];
  pages: number;
}

export const INITIAL_STATE_POKE: IPokemonState = {
  loadingStatus: ApiStatus.LOADING,
  pokes: [],
  pages: 0,
};

export default function pokemonsReducer(
  state: IPokemonState = INITIAL_STATE_POKE,
  action: IPokeAction,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case PokeActionTypes.GET_POKE:
        draft.loadingStatus = ApiStatus.LOADING;
        break;
      case PokeActionTypes.GET_POKE_SUCCESS:
        draft.pokes = action.payload.data;
        draft.pages = action.payload.pagination;
        draft.loadingStatus = ApiStatus.LOADED;
        break;
      default:
    }
  });
}
