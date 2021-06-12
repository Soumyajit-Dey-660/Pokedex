import { START_LOADING, END_LOADING, FETCH_POKEMON_PAGE_WISE, FETCH_ALL_POKEMONS, FETCH_POKEMON_BY_SEARCH, FETCH_CURRENT_POKEMON } from '../types/pokemon';
import * as api from '../../api';

export const getPokemons = page => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPokemonOnLoad(page);
        dispatch({ type: FETCH_POKEMON_PAGE_WISE, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const getAllPokemons = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchAllPokemons();
        dispatch({ type: FETCH_ALL_POKEMONS, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonsBySearch = searchTerm => dispatch => {
    dispatch({ type: FETCH_POKEMON_BY_SEARCH, payload: searchTerm });
}

export const getCurrentPokemon = pokemonId => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchCurrentPokemon(pokemonId);
        dispatch({ type: FETCH_CURRENT_POKEMON, payload: data });
        dispatch({ type: END_LOADING });
    } catch(error) {
        console.log(error);
    }
}
