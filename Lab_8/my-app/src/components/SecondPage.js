import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import carsCatalog from '../static/carsCatalog';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}));


export default function () {
    const classes = useStyles();

    const [visible, setVisible] = useState(2);

    const loadMore = () => {
        setVisible(visible + 2)
    }

    const renderingCard = (car) =>{
        return(
            <div>
                <ImageCard car={car}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {carsCatalog.slice(0, visible).map(car => renderingCard(car))}
            {/* Відображає всі об'єкти від 0 до вісібл */}
            {visible < carsCatalog.length && (
                <button className="buttonSecondPage" onClick={loadMore}>View more</button>
            )}
        </div>
    );
}