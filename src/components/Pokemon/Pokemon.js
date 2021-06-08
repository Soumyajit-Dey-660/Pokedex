import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Pokemon = () => {
    const { pokemonId } = useParams();
    const history = useHistory();
    return (
        <div>
            Pokemon {pokemonId}
        </div>
    )
}

export default Pokemon
