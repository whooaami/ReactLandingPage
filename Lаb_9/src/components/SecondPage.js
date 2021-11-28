import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import cars from '../static/cars';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '117vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}));


export default function () {
    const classes = useStyles();

    const [visible, setVisible] = useState(3);

    const loadMore = () => {
        setVisible(visible + 3)
    }

    const renderingCard = (car) =>{
        return(
            <div>
                <ImageCard extended={ true } car={car}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {cars.slice(0, visible).map(car => renderingCard(car))}
            {visible < cars.length && (
                <button className="buttonSecondPage" onClick={ loadMore }>View more</button>
            )}
        </div>
    );
}
