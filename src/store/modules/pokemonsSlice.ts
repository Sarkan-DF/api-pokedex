import { PayloadAction, createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import PokemonType from '../../types/PokemonType';
import { doGet } from '../../services/pokemonApi';

const adapter = createEntityAdapter<PokemonType>({
  selectId: item => item.id
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.pokemons);

export const getPokemon = createAsyncThunk('pokemons/getPokemon', async (pokemon: number | string) => {
  const response = await doGet(`/pokemon/${pokemon}`);

  if (response.success) {
    const { data } = response;

    data.image = data.sprites.other['official-artwork'].front_default;

    return data;
  } else {
    console.log(response.trace);
    throw true;
  }
});

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: adapter.getInitialState({
    search: '',
    loading: false
  }),
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      adapter.addOne(state, action.payload);
      state.loading = false;
    });
    builder.addCase(getPokemon.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPokemon.rejected, (state, action) => {
      state.loading = false;
    });
  }
});

export const { setSearch } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
