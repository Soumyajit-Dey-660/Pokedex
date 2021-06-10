import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import pokemonLogo from '../../images/pokemon_logo.png';

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <img src={pokemonLogo} alt="icon" height='45px' className={classes.title} onClick={() => history.push('/pokedex?page=1')} />
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
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
