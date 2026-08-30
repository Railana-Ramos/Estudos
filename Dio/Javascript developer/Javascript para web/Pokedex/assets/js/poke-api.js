const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
  pokemon.height = pokeDetail.height / 10;
  pokemon.weight = pokeDetail.weight / 10;

  pokemon.abilities = pokeDetail.abilities.map(
    (ability) => ability.ability.name,
  );

  pokemon.stats = pokeDetail.stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));

  return pokemon;
}

pokeApi.getPokemonByName = (name) => {

    const url =
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`

    return fetch(url)
        .then((response) => {

            if (!response.ok) {
                throw new Error('Pokémon não encontrado')
            }

            return response.json()
        })

        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};
pokeApi.getPokemonsByGeneration = (generation) => {

    const url =
        `https://pokeapi.co/api/v2/generation/${generation}`

    return fetch(url)

        .then((response) => response.json())

        .then((generationData) => {

            const detailRequests =
                generationData.pokemon_species.map(
                    (pokemon) =>
                        pokeApi.getPokemonByName(
                            pokemon.name
                        )
                )

            return Promise.all(detailRequests)

        })
}
pokeApi.getPokemonsByType = (type) => {

    const url =
        `https://pokeapi.co/api/v2/type/${type}`

    return fetch(url)

        .then((response) => response.json())

        .then((typeData) => {

            const detailRequests =
                typeData.pokemon.map(
                    (item) =>
                        pokeApi.getPokemonByName(
                            item.pokemon.name
                        )
                )

            return Promise.all(detailRequests)

        })
}

pokeApi.getPokemons = (offset = 0, limit = 21) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails);
};
