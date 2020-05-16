import { ITodoItem } from './models';

export enum TodosActionTypes {
  ADDED_TODOS = 'todos/added',
}

export interface IAddedTodoAction {
  type: TodosActionTypes.ADDED_TODOS;
  payload: {
    todo: ITodoItem;
  };
}

export function addedTodo(todo: ITodoItem): IAddedTodoAction {
  return {
    type: TodosActionTypes.ADDED_TODOS,
    payload: {
      todo,
    },
  };
}

export type TodosAction = IAddedTodoAction;
