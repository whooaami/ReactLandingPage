import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import cars from '../static/cars';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {cars.map(car => (<ImageCard car={car} />))}
        </div>
    );
}