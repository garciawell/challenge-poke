import produce from 'immer';
import { ApiStatus, ITodoItem } from './models';
import { TodosAction, TodosActionTypes } from './actions';

export const initialTodoState: ITodoState = {
  loadingStatus: ApiStatus.LOADING,
  addingStatus: ApiStatus.LOADED,
  todos: [],
};

export default function todosReducer(
  state: ITodoState = initialTodoState,
  action: TodosAction,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case TodosActionTypes.ADDED_TODOS:
        draft.todos.push(action.payload.todo);
        break;
      default:
    }
  });
}

export interface ITodoState {
  loadingStatus: ApiStatus;
  addingStatus: ApiStatus;
  todos: ITodoItem[];
}
