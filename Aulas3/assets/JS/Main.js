const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMore");
const pokemonDetails = document.getElementById("pokemonDetails");
const backButton = document.getElementById("backButton");

const maxRecords = 15;
const limit = 5;
let offset = 0;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        const newHtml = pokemons.map((pokemon) => `
            <button class="pokemonDetailButton" type="button" id="p${pokemon.number}" data-id="${pokemon.number}">
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            </button>
        `).join('');
        pokemonList.innerHTML += newHtml;


        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItems.push(convertPokemonToLi(pokemon, i + 1));

        // }

        // console.log(listItems)
    })
}

if (pokemonList && loadMoreButton) {
    loadPokemonItens(offset, limit);

    loadMoreButton.addEventListener('click', () => {
        offset += limit;
        const qtdRecordNextPage = offset + limit;

        if (qtdRecordNextPage >= maxRecords) {
            const newLimit = maxRecords - offset;
            loadPokemonItens(offset, newLimit);
            
            loadMoreButton.parentElement.removeChild(loadMoreButton);
        }else{
            loadPokemonItens(offset, limit);
        }
    })
}

// Clicar no botão de detalhes do Pokémon para ir para a página de detalhes do Pokémon
pokemonList?.addEventListener('click', (evento) => {
    const botaoClicado = evento.target.closest('button');
    if (botaoClicado && botaoClicado.hasAttribute('data-id')) {
        const pokemonId = botaoClicado.getAttribute('data-id');
        window.location.href = `detailPage.html?id=${pokemonId}`;
    }

})

function loadPokemonDetails(pokemonId) {
    pokeApi.getPokemonById(pokemonId).then((pokemon) => {
        const detailsHtml = `
            <h2>${pokemon.name} (#${pokemon.number})</h2>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
            <p>Type: ${pokemon.types.join(', ')}</p>
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
            <p>Abilities: ${pokemon.abilities ? pokemon.abilities.join(', ') : 'N/A'}</p>
            <div class="pokemon-stats">
                <h3>Stats</h3>
                ${pokemon.stats ? `
                    <ul class="stats-list">
                        ${pokemon.stats.map((stat) => `
                            <li>
                                <span>${stat.name.replace('-', ' ')}</span>
                                <strong>${stat.base_stat}</strong>
                            </li>
                        `).join('')}
                    </ul>
                ` : '<p>N/A</p>'}
            </div>
        `;
        pokemonDetails.className = `pokemon-details ${pokemon.type}`;
        pokemonDetails.innerHTML = detailsHtml;
    });
}

if (pokemonDetails) {
    const pokemonId = new URLSearchParams(window.location.search).get('id');

    if (pokemonId) {
        loadPokemonDetails(pokemonId);
    }
}

backButton?.addEventListener('click', () => {
    window.history.back();
});