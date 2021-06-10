import { START_LOADING, END_LOADING, FETCH_POKEMON_PAGE_WISE, FETCH_ALL_POKEMONS, FETCH_POKEMON_BY_SEARCH } from '../actions/types/pokemon';

const initialState = {
    isLoading: false,
    allPokemons: {},
    pokemons: {},
    filteredPokemons: {results: []}
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
                pokemons: action.payload
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
        default: return state;
    }
}