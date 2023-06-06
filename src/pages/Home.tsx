import React, { useEffect, useState } from 'react';
import { Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ContentPage from '../components/ContentPage';
import ListPokemon from '../components/ListPokemon';
import { useAppDispatch } from '../store/hooks';
import { getPokemon, setSearch } from '../store/modules/pokemonsSlice';
import getRandomIdPokemon from '../utils/getRandomIdPokemon';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchPokemon, setSearchPokemon] = useState<string>('');

  useEffect(() => {
    dispatch(getPokemon(getRandomIdPokemon()));
  }, []);

  useEffect(() => {
    if (!searchPokemon.length) {
      dispatch(setSearch(''));
    }
  }, [searchPokemon]);

  const handleSearch = () => {
    if (searchPokemon.length) {
      dispatch(setSearch(searchPokemon.toLowerCase()));
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" fontWeight="700">
          Pokédex
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Typography variant="body1">Pesquise seu pokemon pelo nome ou pelo código da Pokédex.</Typography>
      </Grid>
      <Grid item xs={10} md={11}>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value={searchPokemon}
            onChange={ev => setSearchPokemon(ev.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="" edge="start" disabled>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={2} md={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleSearch} disabled={!searchPokemon.length} variant="contained" sx={{ height: '100%' }}>
          <TuneRoundedIcon />
        </Button>
      </Grid>

      <Grid item xs={12}>
        <ContentPage>
          <ListPokemon />
        </ContentPage>
      </Grid>
    </Grid>
  );
};

export default Home;
