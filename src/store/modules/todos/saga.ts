import { call, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { TodosActionTypes } from './actions';

export function* sendUsers() {
  try {
    console.log('GARCIA WELLL');
    yield call(api.get, '/users');
  } catch (err) {
    //
  }
}

export default function* saga() {
  yield takeLatest(TodosActionTypes.ADDED_TODOS, sendUsers);
}
