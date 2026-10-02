const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMore");

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

// Clicar no botão de detalhes do Pokémon para ir para a página de detalhes do Pokémon
pokemonList.addEventListener('click', (evento) => {
    const botaoClicado = evento.target.closest('button');
    if (botaoClicado && botaoClicado.hasAttribute('data-id')) {
        const pokemonId = botaoClicado.getAttribute('data-id');
        window.location.href = `detailPage.html?id=${pokemonId}`;
    }

})