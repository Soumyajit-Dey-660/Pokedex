import React from 'react';
import { debounce } from 'lodash';
import { AppBar, Toolbar, InputBase } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemonsBySearch, setFilteredPokemon } from '../../actions/creators/pokemon';
import useStyles from './styles';
import pokemonLogo from '../../images/pokemon_logo.png';

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const handleChange = debounce(searchText => {
        dispatch(getPokemonsBySearch(searchText));
    }, 500);
    const locationPath = location.pathname.split('/');
    const backToHomePage = () => {
        dispatch(setFilteredPokemon());
        history.push('/pokedex?page=1');
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} >
                <Toolbar className={classes.toolbar}>
                    {locationPath.includes('pokemon') && 
                        <ArrowBackIcon 
                            onClick={backToHomePage}
                            className={classes.backButton}
                        />
                    }
                    <img src={pokemonLogo} alt="icon" height='45px' className={classes.title} onClick={backToHomePage} />
                    {!locationPath.includes('pokemon') && (
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Pokemon..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={event => handleChange(event.target.value)}
                        />
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
