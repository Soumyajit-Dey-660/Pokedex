import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: '85%',
        paddingTop: '87%',
        // backgroundColor: 'rgba(255, 255, 255, 0.9)',
        // backgroundBlendMode: 'darken',
        width: '100%'
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1))',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
        textAlign: 'center',
        fontFamily: `'Poppins', 'sans-serif'`,
        height: '40px',
        background: 'linear-gradient(to left top, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1))'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
});