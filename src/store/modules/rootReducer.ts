import { combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import pokemonsReducer from './pokemonsSlice';

export default combineReducers({
  pokemon: pokemonReducer,
  pokemons: pokemonsReducer
});
