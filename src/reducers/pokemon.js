import { START_LOADING, END_LOADING, FETCH_POKEMON_ON_LOAD } from '../actions/types/pokemon';

const initialState = {
    isLoading: false,
    pokemons: {}
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
        case FETCH_POKEMON_ON_LOAD:
            return {
                ...state,
                pokemons: action.payload
            }
        default: return state;
    }
}