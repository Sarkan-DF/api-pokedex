function getRandomIdPokemon(): number {
  const offList = JSON.parse(process.env.REACT_APP_POKEMON_OFF_LIST + '');
  let sort = 0;

  do {
    sort = Math.floor(Math.random() * Number(process.env.REACT_APP_TOTAL_POKEMON));
  } while (offList.includes(sort));

  return sort;
}

export default getRandomIdPokemon;
