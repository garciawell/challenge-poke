import { call, takeLatest, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { PokeActionTypes } from './actions';

export function* getPokes() {
  try {
    const { data } = yield call(api.get, '/pokemon');

    yield put({
      type: PokeActionTypes.GET_POKE_SUCCESS,
      payload: data.results,
    });
  } catch (err) {
    //
  }
}

export default function* saga() {
  yield takeLatest(PokeActionTypes.GET_POKE, getPokes);
}
