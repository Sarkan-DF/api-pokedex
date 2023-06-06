function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Number(process.env.REACT_APP_TOTAL_POKEMON));
}

export default getRandomInt;
