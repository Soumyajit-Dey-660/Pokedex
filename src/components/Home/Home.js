import React, { useEffect } from 'react';
import { CircularProgress, Container, Paper, Grow } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPokemons } from '../../actions/creators/pokemon';
import Pokedex from '../Pokedex/Pokedex';
import Pagination from '../Pagination/Pagination';
import useStyles from './styles';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { pokemons, isLoading } = useSelector(state => state.pokemon);
    const spinnerInMiddle = { position: 'absolute', top: '50%', left: '50%' };
    const page = useQuery().get('page') || 1;
    useEffect(() => {
        if (page) dispatch(getPokemons(page));
    }, [page])
    if (!isLoading && Object.keys(pokemons).length === 0) return 'No Pokemons to display';
    return (
        <>
            {
                isLoading ?
                    <CircularProgress style={spinnerInMiddle} /> :
                    (
                        <Grow in>
                            <Container maxWidth='xl'>
                                <Pokedex pokemons={pokemons} />
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
