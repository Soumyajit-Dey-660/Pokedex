import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonOnLoad } from  '../../actions/creators/pokemon';
import capitalize from '../../utils/capitalize';

const Pokedex = () => {
    const dispatch = useDispatch();
    const { pokemons, isLoading } = useSelector(state => state.pokemon);
    const spinnerInMiddle = {position: 'absolute', top: '50%', left: '50%'};
    useEffect(() => {
        dispatch(getPokemonOnLoad())
    }, [])
    if(!isLoading && pokemons?.results.length === 0) return 'No Pokemons to display';
    return (
        <>
            {isLoading ?
                <CircularProgress style={spinnerInMiddle} /> :
                (<div>
                    {pokemons.results.map(pokemon => (
                        <li key={pokemon.name}>{capitalize(pokemon.name)}</li>
                    ))}
                </div>)
            }
        </>
    )
}

export default Pokedex
