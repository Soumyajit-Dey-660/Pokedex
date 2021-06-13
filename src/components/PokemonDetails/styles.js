import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: '20px', 
        borderRadius: '15px',
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1))',
    },
    media: {
        borderRadius: '20px',
        objectFit: 'contain',
        width: '100%',
        maxHeight: '700px',
    },
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column-reverse',
        },
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 3,
    },
    imageSection: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
        flex: 4,
    },
    pokemonTitle: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '10px 0',
    },
    pokemonBasicDesc: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
            padding:'10px 0',
            '&:nth-child(2)': {
                order: 2
            }
        },
    },
    pokemonHeight: {
        padding: '20px 20px'
    },
    pokemonWeight: {
        padding: '20px 20px'
    },
    typeText: {
        display: 'flex',
        justifyContent: 'space-evenly',
        textAlign: 'center'
    },
    fastMoves: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexFlow: 'row wrap',
        '&::after': {
            content: "",
            flex: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    fastMove: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '20px 10px',
        margin: '10px 20px',
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1))',
        borderRadius: '2rem',
        textAlign: 'center',
        flex: '0 1 41%',
        [theme.breakpoints.down('sm')]: {
            margin: '10px 10px',
        },
    },
    chargeMoves: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexFlow: 'row wrap',
        '&::after': {
            content: "",
            flex: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    chargeMove: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '20px 10px',
        margin: '10px 20px',
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1))',
        borderRadius: '2rem',
        textAlign: 'center',
        flex: '0 1 41%',
        [theme.breakpoints.down('sm')]: {
            margin: '10px 10px',
        },
    },
    weakTypes: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-around',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    effectiveTypes: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-around',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    loadingPaper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
    },
}));