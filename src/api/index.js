import axios from 'axios';
import { URL, POKEMONS_PER_PAGE } from '../constants/apiConstants';

export const fetchPokemonOnLoad = page => axios.get(`${URL}/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${(page-1)*POKEMONS_PER_PAGE}`)
export const fetchAllPokemons = () => axios.get(`${URL}/pokemon?limit=10000`)