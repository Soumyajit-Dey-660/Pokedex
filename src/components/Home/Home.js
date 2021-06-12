import React, { useEffect } from 'react';
import { CircularProgress, Container, Paper, Grow } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPokemons, getAllPokemons } from '../../actions/creators/pokemon';
import Pokedex from '../Pokedex/Pokedex';
import Pagination from '../Pagination/Pagination';
import useStyles from './styles';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { pokemonsPageWise, isLoading, filteredPokemons } = useSelector(state => state.pokemon);
    const page = useQuery().get('page') || 1;
    const spinnerInMiddle = { position: 'absolute', top: '50%', left: '50%' };
    useEffect(() => {
        if (page) dispatch(getPokemons(page));
    }, [page])

    useEffect(() => {
        // Get all the pokemon data for filtering..
        dispatch(getAllPokemons())
    }, [])
    if (!isLoading && Object.keys(pokemonsPageWise).length === 0) return 'No Pokemons to display';
    return (
        <>
            {
                isLoading ?
                    <CircularProgress style={spinnerInMiddle} /> :
                    (
                        <Grow in>
                            <Container maxWidth='xl'>
                                {filteredPokemons?.results.length === 0 ?
                                    <Pokedex pokemons={pokemonsPageWise} /> :
                                    <Pokedex pokemons={filteredPokemons} />
                                }
                                <Paper className={classes.pagination}>
                                    <Pagination page={page} />
                                </Paper>
                            </Container>
                        </Grow>
                    )
            }
        </>
    )
}

export default Home
