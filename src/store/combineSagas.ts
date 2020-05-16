import { all, fork } from 'redux-saga/effects';
import todos from './modules/todos/saga';

export default function* root() {
  yield all([
    fork(todos),
    // fork(dynamics),
  ]);
}
