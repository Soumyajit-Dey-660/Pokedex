import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardMedia, Typography, ButtonBase } from '@material-ui/core';
import capitalize from '../../utils/capitalize';
import useStyles from './styles';

const Pokemon = ({ pokemon }) => {
    const classes = useStyles();
    const history = useHistory();
    const pokemonAttr = pokemon.url.split('/');
    const pokemonId = pokemonAttr[pokemonAttr.length - 2];
    const openPokemonDetails = () => {
        history.push(`/pokemon/${pokemonId}`);
    }
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase className={classes.cardAction} onClick={openPokemonDetails}>
                <CardMedia className={classes.media} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} />
                <Typography className={classes.title} variant="h5">{capitalize(pokemon.name)}</Typography>
            </ButtonBase>
        </Card>
    )
}

export default Pokemon
