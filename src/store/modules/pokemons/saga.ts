import { call, takeLatest, put, all, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import { PokeActionTypes } from './actions';
import { IPokeModel } from './models';

export function* getPokes({ payload }: any) {
  const sumOffsetLimit = (payload - 1) * 20;

  try {
    const { data } = yield call(api.get, `/pokemon?offset=${sumOffsetLimit}`);

    yield delay(1000);

    const responses = yield all(
      data.results.map((item: IPokeModel) => call(api.get, item.url)),
    );

    const getOnlyData = responses.map((item: any) => ({
      id: item.data.id,
      name: item.data.name,
      img: item.data.sprites.front_default,
      types: item.data.types,
    }));

    yield put({
      type: PokeActionTypes.GET_POKE_SUCCESS,
      payload: { pagination: data.count, data: getOnlyData },
    });
  } catch (err) {
    //
  }
}

export default function* saga() {
  yield takeLatest(PokeActionTypes.GET_POKE, getPokes);
}
