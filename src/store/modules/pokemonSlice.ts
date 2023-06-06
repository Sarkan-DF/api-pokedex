import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    }
  }
});

export const { create, clear } = pokemonSlice.actions;
export default pokemonSlice.reducer;
