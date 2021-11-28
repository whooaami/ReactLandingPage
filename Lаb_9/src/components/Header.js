import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SecondPage from './SecondPage';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/cars.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-50px',
        width: '93%',
        margin: '0 auto',
    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarWrapperNav: {
        width: '69%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarNav: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    headerHr: {
        width: '100%',
        marginTop: '0',
    },
    title: {
        fontSize: '50px',
        color: '#fff',
    },
    sizeParagraph: {
        fontSize: '24px',
        color: '#fff',
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <div>
                    <h1 className={classes.title}>Cars</h1>
                    <p className={classes.sizeParagraph}> 
                        Hi, are you looking for a car? <br /> 
                        Great, you've come to the right site to help you find the car of your dreams. <br /> 
                        Below you can see the top models of today's market. <br /> 
                        I think you will find the right car. <br /> 
                        <h1>Welcome!</h1> 
                    </p>
                </div>
            </div>
            <SecondPage />
        </div>
        
    );
}
