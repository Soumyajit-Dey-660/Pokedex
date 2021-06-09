import React from 'react';
import { Grid } from '@material-ui/core';
import Pokemon from '../Pokemon/Pokemon';
import useStyles from './styles';



const Pokedex = ({ pokemons }) => {
    const classes = useStyles();
    return (
        <>
            {pokemons && (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {pokemons?.results?.map(pokemon => (
                        <Grid key={pokemon.name} item xs={12} sm={6} md={4} lg={3}>
                            <Pokemon pokemon={pokemon} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    )
}

export default Pokedex
