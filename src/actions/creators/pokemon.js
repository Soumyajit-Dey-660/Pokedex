import { START_LOADING, END_LOADING, FETCH_POKEMON_ON_LOAD } from '../types/pokemon';
import * as api from '../../api';

export const getPokemonOnLoad = () => async dispatch => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPokemonOnLoad();
        dispatch({ type: FETCH_POKEMON_ON_LOAD, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}