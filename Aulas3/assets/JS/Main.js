const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon, index) {
    return `
        <li class="pokemon">
                    <span class="number">#00${index}</span>
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


fetch(url)
    .then((response) =>  response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon, i + 1);
        }
    })
    .catch((error) => console.log(error))
