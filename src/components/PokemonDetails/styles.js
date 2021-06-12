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
        maxHeight: '600px',
    },
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
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
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
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
    loadingPaper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
    },
}));