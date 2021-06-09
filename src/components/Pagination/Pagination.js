import React from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { POKEMONS_PER_PAGE, TOTAL_POKEMONS } from '../../constants/apiConstants';
import useStyles from './styles';

const Paginate = ({ page }) => {
    const classes = useStyles();
    const numOfPages = Math.ceil(TOTAL_POKEMONS / POKEMONS_PER_PAGE);
    return (
        <Pagination
            className={classes.ul}
            count={numOfPages}
            page={Number(page) || 1}
            variant='outlined'
            color='primary'
            renderItem={item => (
                <PaginationItem {...item} component={Link} to={`/pokedex?page=${item.page}`} />
            )}
        />
    )
}

export default Paginate
