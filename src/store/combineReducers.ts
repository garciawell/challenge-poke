import { combineReducers } from 'redux';
import pokemonsReducer, {
  IPokemonState,
  INITIAL_STATE_POKE,
} from './modules/pokemons/reducer';

export interface IState {
  pokemons: IPokemonState;
}

export const initialState: IState = {
  pokemons: INITIAL_STATE_POKE,
};

export default combineReducers({
  pokemons: pokemonsReducer,
});
