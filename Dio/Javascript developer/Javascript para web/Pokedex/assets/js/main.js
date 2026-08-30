const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const searchForm = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')
const pokemonModal = document.getElementById('pokemonModal')
const pokemonDetails = document.getElementById('pokemonDetails')
const closeModal = document.getElementById('closeModal')
const generationFilter = document.getElementById('generationFilter')
const typeFilter = document.getElementById('typeFilter')
const maxRecords = 1351;
const limit = 21;
let offset = 0; 



function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => {

            const newHtml = pokemons
                .map(convertPokemonToLi)
                .join('')

            pokemonList.innerHTML += newHtml

        })
}
function convertPokemonToLi(pokemon) {

    return `
        <li
            class="pokemon ${pokemon.type}"
            data-pokemon-name="${pokemon.name}"
        >

            <span class="number">
                #${pokemon.number}
            </span>

            <span class="name">
                ${pokemon.name}
            </span>

            <div class="detail">

                <ol class="types">

                    ${pokemon.types.map(
                        (type) =>
                            `<li class="type ${type}">
                                ${type}
                            </li>`
                    ).join('')}

                </ol>

                <img
                    src="${pokemon.photo}"
                    alt="${pokemon.name}"
                >

            </div>

        </li>
    `
}
function renderPokemons(pokemons) {

    pokemonList.innerHTML =
        pokemons
            .map(convertPokemonToLi)
            .join('')
}
function applyFilters() {

    const generation = generationFilter.value
    const type = typeFilter.value


    // Nenhum filtro
    if (generation === 'all' && type === 'all') {

        pokemonList.innerHTML = ''

        offset = 0

        loadPokemonItens(offset, limit)

        return
    }


    // Tem geração selecionada
    if (generation !== 'all') {

        pokeApi
            .getPokemonsByGeneration(generation)

            .then((pokemons) => {

                let filteredPokemons = pokemons

                if (type !== 'all') {

                    filteredPokemons =
                        pokemons.filter(
                            (pokemon) =>
                                pokemon.types.includes(type)
                        )

                }

                renderPokemons(filteredPokemons)

            })

        return
    }


    // Só tipo selecionado
    if (type !== 'all') {

        pokeApi
            .getPokemonsByType(type)
            .then(renderPokemons)

    }
}
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
searchForm.addEventListener('submit', (event) => {

    event.preventDefault()

    const pokemonName =
        searchInput.value.trim().toLowerCase()

    if (!pokemonName) {
        return
    }

    pokeApi.getPokemonByName(pokemonName)

        .then((pokemon) => {

            pokemonList.innerHTML =
                convertPokemonToLi(pokemon)

        })

        .catch(() => {

            pokemonList.innerHTML = `
                <p class="not-found">
                    Pokémon não encontrado 😢
                </p>
            `

        })
})

pokemonList.addEventListener('click', (event) => {

    const pokemonCard =
        event.target.closest('.pokemon')

    if (!pokemonCard) {
        return
    }

    const pokemonName =
        pokemonCard.dataset.pokemonName

    pokeApi.getPokemonByName(pokemonName)
        .then(showPokemonDetails)
})

function showPokemonDetails(pokemon) {

    pokemonDetails.innerHTML = `

        <div class="modal-pokemon ${pokemon.type}">

            <img
                class="modal-pokemon-image"
                src="${pokemon.photo}"
                alt="${pokemon.name}"
            >

            <h2>
                ${pokemon.name}
            </h2>

            <span>
                #${pokemon.number}
            </span>

            <div class="modal-types">

                ${pokemon.types.map(
                    (type) =>
                        `<span class="type ${type}">
                            ${type}
                        </span>`
                ).join('')}

            </div>

            <div class="pokemon-info">

                <p>
                    <strong>Altura:</strong>
                    ${pokemon.height} m
                </p>

                <p>
                    <strong>Peso:</strong>
                    ${pokemon.weight} kg
                </p>

                <p>
                    <strong>Habilidades:</strong>
                    ${pokemon.abilities.join(', ')}
                </p>

            </div>

            <h3>Status</h3>

            <div class="stats">

                ${pokemon.stats.map(
                    (stat) => `
                        <div class="stat">
                            <span>${stat.name}</span>
                            <strong>${stat.value}</strong>
                        </div>
                    `
                ).join('')}

            </div>

        </div>
    `

    pokemonModal.classList.add('open')
}
closeModal.addEventListener('click', () => {

    pokemonModal.classList.remove('open')

})
pokemonModal.addEventListener('click', (event) => {

    if (event.target === pokemonModal) {
        pokemonModal.classList.remove('open')
    }

})
generationFilter.addEventListener(
    'change',
    applyFilters
)

typeFilter.addEventListener(
    'change',
    applyFilters
)