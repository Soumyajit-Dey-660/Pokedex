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
        justifyContent: 'space-around'
    },
    pokemonBasicDesc: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    typeText: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    fastMoves: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    fastMove: {
        padding: '20px 10px',
        margin: '10px 20px',
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1))',
        borderRadius: '2rem',
        textAlign: 'center',
        flex: 1,
    },
    chargeMoves: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    chargeMove: {
        padding: '20px 10px',
        margin: '10px 20px',
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1))',
        borderRadius: '2rem',
        textAlign: 'center',
        flex: '1 0 41%',
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