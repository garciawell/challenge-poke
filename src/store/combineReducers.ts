import { combineReducers } from 'redux';
import todosReducer, {
  ITodoState,
  initialTodoState,
} from './modules/todos/reducer';

export interface IState {
  todos: ITodoState;
}

export const initialState: IState = {
  todos: initialTodoState,
};

export default combineReducers({
  todos: todosReducer,
});
