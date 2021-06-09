import React, { useEffect } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation  } from 'react-router-dom';
import { getPokemonOnLoad } from  '../../actions/creators/pokemon';
import Pokemon from '../Pokemon/Pokemon';
import useStyles from './styles';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Pokedex = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { pokemons, isLoading } = useSelector(state => state.pokemon);
    const page = useQuery().get('page') || 1;
    console.log(`Page is ${page}`);
    const spinnerInMiddle = {position: 'absolute', top: '50%', left: '50%'};
    useEffect(() => {
        dispatch(getPokemonOnLoad())
    }, [])
    if (!isLoading && Object.keys(pokemons).length === 0) return 'No Pokemons to display';
    return (
        <>
            {isLoading ?
                <CircularProgress style={spinnerInMiddle} /> :
                (<div>
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {pokemons.results.map(pokemon => (
                            <Grid key={pokemon.name} item xs={12} sm={6} md={4} lg={3}>
                                <Pokemon pokemon={pokemon} />
                            </Grid>
                        ))}
                    </Grid>
                </div>)
            }
        </>
    )
}

export default Pokedex
