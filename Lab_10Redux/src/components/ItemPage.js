import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import carsCatalog from '../static/carsCatalog';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}));
export default function ItemPage() {
    const classes = useStyles();

    const { id } = useParams();

    return (
        <div className={classes.root}>
            <ImageCard extended={ true } car={carsCatalog[id-1]} />
        </div>
    );
}
