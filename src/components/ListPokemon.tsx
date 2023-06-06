import React, { useEffect, useState } from 'react';
import PokemonType from '../types/PokemonType';
import { CircularProgress, Grid, Typography } from '@mui/material';
import CardPokemon from './CardPokemon';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPokemon, selectAll } from '../store/modules/pokemonsSlice';
import getRandomInt from '../utils/getRandomInt';

const ListPokemon: React.FC = () => {
  const [list, setList] = useState<PokemonType[]>([]);

  const dispatch = useAppDispatch();
  const pokemonsRedux = useAppSelector(selectAll);
  const searchRedux = useAppSelector(state => state.pokemons.search);
  const loadingRedux = useAppSelector(state => state.pokemons.loading);

  useEffect(() => {
    const loop = pokemonsRedux.length < 8 ? pokemonsRedux.length : 8;
    const items: PokemonType[] = [];

    if (searchRedux.length) {
      const sort = pokemonsRedux.find(item => item.name === searchRedux || item.id === Number(searchRedux));
      if (sort) {
        items.push(sort);
      } else {
        dispatch(getPokemon(searchRedux));
      }
    } else {
      do {
        const sort = pokemonsRedux[getRandomInt(pokemonsRedux.length)];
        if (sort && !items.find(item => item.id === sort.id)) {
          items.push(sort);
        }
      } while (items.length < loop);
    }

    setList(items);
  }, [pokemonsRedux, searchRedux]);

  if (loadingRedux) {
    return (
      <Grid container>
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  if (!list.length) {
    return <Typography>Nenhum pokemon para listar.</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {list.map(item => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <CardPokemon pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPokemon;
