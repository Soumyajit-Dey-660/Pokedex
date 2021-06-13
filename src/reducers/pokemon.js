import { START_LOADING, END_LOADING, FETCH_POKEMON_PAGE_WISE,
        FETCH_ALL_POKEMONS, FETCH_POKEMON_BY_SEARCH,
    FETCH_CURRENT_POKEMON, SET_FILTERED_POKEMON } from '../actions/types/pokemon';

const initialState = {
    isLoading: false,
    allPokemons: {},
    pokemonsPageWise: {},
    filteredPokemons: {results: []},
    currentPokemon: {}
}

export const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case END_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case FETCH_POKEMON_PAGE_WISE:
            return {
                ...state,
                pokemonsPageWise: action.payload
            }
        case FETCH_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        case FETCH_POKEMON_BY_SEARCH:
            let filtered = [];
            filtered = action.payload !== '' ?
                state.allPokemons.results.filter(pokemon => pokemon.name.includes(action.payload)) : [];
            return {
                ...state,
                filteredPokemons: {results: filtered}
            }
        case FETCH_CURRENT_POKEMON:
            return {
                ...state,
                currentPokemon: action.payload
            }
        case SET_FILTERED_POKEMON:
            return {
                ...state,
                filteredPokemons: {results: []}
            }
        default: return state;
    }
}