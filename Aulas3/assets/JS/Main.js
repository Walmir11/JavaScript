function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon" ${pokemon.type}">
                    <span class="number">#00${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
    `
}

const pokemonList = document.getElementById("pokemonList");


pokeApi.getPokemons().then((pokemons) => {

    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');;


    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon, i + 1));

    // }

    // console.log(listItems)
})
