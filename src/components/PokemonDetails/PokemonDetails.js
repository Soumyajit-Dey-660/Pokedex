import React, { useEffect } from 'react';
import { Paper, Typography, Divider, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentPokemon } from '../../actions/creators/pokemon';
import { IMAGE_URL } from '../../constants/apiConstants';
import capitalize from '../../utils/capitalize';
import pokemonMoves from '../../constants/pokemonMoves';
import typeComparison from '../../constants/typeComparison';
import useStyles from './styles';
import grass from '../../images/grass.png';
import bug from '../../images/bug.png';
import dark from '../../images/dark.png';
import dragon from '../../images/dragon.png';
import electric from '../../images/electric.png';
import fairy from '../../images/fairy.png';
import fighting from '../../images/fighting.png';
import fire from '../../images/fire.png';
import flying from '../../images/flying.png';
import ghost from '../../images/ghost.png';
import ground from '../../images/ground.png';
import ice from '../../images/ice.png';
import normal from '../../images/normal.png';
import poison from '../../images/poison.png';
import psychic from '../../images/psychic.png';
import rock from '../../images/rock.png';
import steel from '../../images/steel.png';
import water from '../../images/water.png';

const PokemonDetails = () => {
    const { pokemonId } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
    const { currentPokemon, isLoading } = useSelector(state => state.pokemon);
    const spinnerInMiddle = { position: 'absolute', top: '50%', left: '50%' };
    const getPokemonMoves = pokemonId => {
        let fastMoves;
        let chargeMoves;
        for (let i = 0; i < pokemonMoves.length; i++) {
            if (pokemonMoves[i].pokemon_id === Number(pokemonId) && pokemonMoves[i].form === 'Normal') {
                fastMoves = pokemonMoves[i].fast_moves;
                chargeMoves = pokemonMoves[i].charged_moves;
                break;
            }
        }
        return [fastMoves, chargeMoves];
    }

    const getPokemonTypeAttributes = currentPokemon => {
        let typeArr = [];
        currentPokemon.types.forEach(type => typeArr.push(type.type.name));
        let allWeaknesses = [];
        let allStrengths = [];
        typeArr.forEach(weakness => {
            typeComparison[0][weakness][1]['weakness'].forEach(weaknessType => allWeaknesses.indexOf(weaknessType) === -1 && allWeaknesses.push(weaknessType))
        });
        typeArr.forEach(strength => {
            typeComparison[0][strength][0]['superEffective'].forEach(strengthType => allStrengths.indexOf(strengthType) === -1 && allStrengths.push(strengthType))
        });
        return [allWeaknesses, allStrengths];
    }

    useEffect(() => {
        dispatch(getCurrentPokemon(pokemonId));
    }, [])
    
    return (
        <>
            {isLoading ?
            <CircularProgress style={spinnerInMiddle} /> : (
            <Paper className={classes.paper} elevation={6}>
                <div className={classes.card}>
                    <div className={classes.section}>
                            {Object.keys(currentPokemon).length !== 0 && (
                                <div className={classes.pokemonBasicDesc}>
                                <Typography className={classes.pokemonHeight} variant='h5'>Height: {currentPokemon.height}
                                </Typography>
                                <div className={classes.pokemonType}>
                                    {currentPokemon.types.map(type => {
                                        let pokemonType;
                                        if (type.type.name === 'bug') pokemonType = bug;
                                        else if (type.type.name === 'dark') pokemonType = dark;
                                        else if (type.type.name === 'dragon') pokemonType = dragon;
                                        else if (type.type.name === 'electric') pokemonType = electric;
                                        else if (type.type.name === 'fairy') pokemonType = fairy;
                                        else if (type.type.name === 'fighting') pokemonType = fighting;
                                        else if (type.type.name === 'fire') pokemonType = fire;
                                        else if (type.type.name === 'flying') pokemonType = flying;
                                        else if (type.type.name === 'ghost') pokemonType = ghost;
                                        else if (type.type.name === 'grass') pokemonType = grass;
                                        else if (type.type.name === 'ground') pokemonType = ground;
                                        else if (type.type.name === 'ice') pokemonType = ice;
                                        else if (type.type.name === 'normal') pokemonType = normal;
                                        else if (type.type.name === 'poison') pokemonType = poison;
                                        else if (type.type.name === 'psychic') pokemonType = psychic;
                                        else if (type.type.name === 'rock') pokemonType = rock;
                                        else if (type.type.name === 'steel') pokemonType = steel;
                                        else if (type.type.name === 'water') pokemonType = water;
                                        return (<img
                                            style={{height: '50px'}}
                                            key={type.type.name}
                                            src={pokemonType}
                                            alt={type.type.name}
                                        />)
                                    })}
                                    <div className={classes.typeText}>
                                        {currentPokemon.types.map((type, id) => <Typography key={id}>{capitalize(type.type.name)}</Typography>)}
                                    </div>
                                </div>
                                <Typography className={classes.pokemonWeight} variant='h5'>Weight: {currentPokemon.weight}</Typography>
                            </div>
                            )}
                        <Divider style={{ margin: '20px 0' }} />
                        <div className={classes.description}>
                            <div className={classes.moves}>
                                <Typography variant='h5' style={{ textAlign: 'center' }}>Fast Moves</Typography>
                                <div className={classes.fastMoves}>
                                    {getPokemonMoves(pokemonId)[0].map(fastMove => (
                                        <Typography key={fastMove} variant='h6' className={classes.fastMove}>{fastMove}</Typography>
                                        )
                                    )}
                                </div>
                                <Divider style={{ margin: '10px 0' }} />
                                <Typography variant='h5' style={{ textAlign: 'center' }}>Charge Moves</Typography>
                                <div className={classes.chargeMoves}>
                                    {getPokemonMoves(pokemonId)[1].map(chargeMove => (
                                    <Typography key={chargeMove} variant='h6' className={classes.chargeMove}>{chargeMove}</Typography>
                                    )
                                    )}
                                </div>
                                <Divider style={{ margin: '10px 0' }} />
                            </div>
                            {Object.keys(currentPokemon).length !== 0 && (
                                <div className={classes.typeCompare}>
                                    <Typography variant='h5' style={{ textAlign: 'center', margin: '15px 0' }}>Weakness</Typography>
                                    <div className={classes.weakTypes}>
                                        {getPokemonTypeAttributes(currentPokemon)[0].map((weakness, id) => {
                                        let weaknessType;
                                        if (weakness === 'bug') weaknessType = bug;
                                        else if (weakness === 'dark') weaknessType = dark;
                                        else if (weakness === 'dragon') weaknessType = dragon;
                                        else if (weakness === 'electric') weaknessType = electric;
                                        else if (weakness === 'fairy') weaknessType = fairy;
                                        else if (weakness === 'fighting') weaknessType = fighting;
                                        else if (weakness === 'fire') weaknessType = fire;
                                        else if (weakness === 'flying') weaknessType = flying;
                                        else if (weakness === 'ghost') weaknessType = ghost;
                                        else if (weakness === 'grass') weaknessType = grass;
                                        else if (weakness === 'ground') weaknessType = ground;
                                        else if (weakness === 'ice') weaknessType = ice;
                                        else if (weakness === 'normal') weaknessType = normal;
                                        else if (weakness === 'poison') weaknessType = poison;
                                        else if (weakness === 'psychic') weaknessType = psychic;
                                        else if (weakness === 'rock') weaknessType = rock;
                                        else if (weakness === 'steel') weaknessType = steel;
                                        else if (weakness === 'water') weaknessType = water;
                                        return (<img
                                            style={{ height: '50px', margin: '10px 10px' }}
                                            key={id}
                                            src={weaknessType}
                                            alt={weakness}
                                        />)
                                    })}
                                    </div>
                                    <Divider style={{ margin: '15px 0' }} />
                                    <Typography variant='h5' style={{ textAlign: 'center' }}>Super Effective</Typography>
                                    <div className={classes.effectiveTypes}>
                                                {getPokemonTypeAttributes(currentPokemon)[1].map((strength, id) => {
                                                    let strengthType;
                                                    if (strength === 'bug') strengthType = bug;
                                                    else if (strength === 'dark') strengthType = dark;
                                                    else if (strength === 'dragon') strengthType = dragon;
                                                    else if (strength === 'electric') strengthType = electric;
                                                    else if (strength === 'fairy') strengthType = fairy;
                                                    else if (strength === 'fighting') strengthType = fighting;
                                                    else if (strength === 'fire') strengthType = fire;
                                                    else if (strength === 'flying') strengthType = flying;
                                                    else if (strength === 'ghost') strengthType = ghost;
                                                    else if (strength === 'grass') strengthType = grass;
                                                    else if (strength === 'ground') strengthType = ground;
                                                    else if (strength === 'ice') strengthType = ice;
                                                    else if (strength === 'normal') strengthType = normal;
                                                    else if (strength === 'poison') strengthType = poison;
                                                    else if (strength === 'psychic') strengthType = psychic;
                                                    else if (strength === 'rock') strengthType = rock;
                                                    else if (strength === 'steel') strengthType = steel;
                                                    else if (strength === 'water') strengthType = water;
                                                    return (<img
                                                        style={{ height: '50px', margin: '10px 10px' }}
                                                        key={id}
                                                        src={strengthType}
                                                        alt={strength}
                                                    />)
                                                })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={classes.imageSection}>
                        <Typography variant="h3" component="h2" className={classes.pokemonTitle}>{capitalize(currentPokemon.name)}
                        </Typography>
                        <img className={classes.media} src={`${IMAGE_URL}/${pokemonId}.png`} alt={currentPokemon.name} />
                    </div>
                </div>
            </Paper>
        )}
        </>
    )
}

export default PokemonDetails
