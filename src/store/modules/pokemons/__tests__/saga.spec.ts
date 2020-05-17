import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from 'services/api';
import { getPokes } from '../saga';
import { Creators as ActionPokes } from '../actions';

const apiMock = new MockAdapter(api);

describe('Pokemons Saga', () => {
  it('should be able to fetch pokemons', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/pokemon', { payload: 'John' }).reply(200, ['Node.js'], 2);

    await runSaga({ dispatch }, getPokes).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      ActionPokes.getPokesSuccess(['Node.js'], 2),
    );
  });
});
