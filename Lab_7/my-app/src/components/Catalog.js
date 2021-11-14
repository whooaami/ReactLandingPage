import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import carsCatalog from '../static/carsCatalog';
import '../App.css';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));


 export function Catalog() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {carsCatalog.map(car => (<ImageCard car={car} />))}
        </div>
    );
}

export default Catalog;
