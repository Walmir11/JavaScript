function convertPokemonToLi(pokemon, index=1) {
    return `
        <li class="pokemon">
                    <span class="number">#00${index+1}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            <li class="type">Grass</li>
                            <li class="type">Poison</li>
                        </ol>
                        <img src="https://www.pngarts.com/files/3/Bulbasaur-Free-PNG-Image.png" alt="${pokemon.name}">
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
