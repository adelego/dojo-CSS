const MAX_POKE_ID = 500;
export const fetchPokemon = async () => {
  const urls = Array.from(Array(6)).map(
    (x) =>
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(
        Math.random() * MAX_POKE_ID
      )}`
  );
  console.log(urls);
  const pkList = await Promise.all([
    fetch(urls[0]),
    fetch(urls[1]),
    fetch(urls[2]),
    fetch(urls[3]),
    fetch(urls[4]),
    fetch(urls[5]),
  ]).then(([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]) => {
    console.log(pokemon1);
    return Promise.all([
      pokemon1.json(),
      pokemon2.json(),
      pokemon3.json(),
      pokemon4.json(),
      pokemon5.json(),
      pokemon6.json(),
    ]);
  });
  return pkList;
};
