import produce from 'immer';
import { ApiStatus, IPokeModel } from './models';
import { PokeAction, PokeActionTypes } from './actions';

export const initialTodoState: ITodoState = {
  loadingStatus: ApiStatus.LOADING,
  addingStatus: ApiStatus.LOADED,
  pokes: [],
};

export default function todosReducer(
  state: ITodoState = initialTodoState,
  action: PokeAction,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case PokeActionTypes.GET_POKE_SUCCESS:
        draft.pokes.push(action.payload);
        break;
      default:
    }
  });
}

export interface ITodoState {
  loadingStatus: ApiStatus;
  addingStatus: ApiStatus;
  pokes: IPokeModel[];
}
