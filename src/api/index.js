import axios from 'axios';
import { URL } from '../constants/apiConstants';

export const fetchPokemonOnLoad = () => axios.get(`${URL}/pokemon?limit=30&offset=0`);