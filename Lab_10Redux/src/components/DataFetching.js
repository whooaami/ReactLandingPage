import React, { useState } from 'react'
import ImageCard from './ImageCard';
import carsCatalog from '../static/carsCatalog';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

function DataFetching({cars}) {

    const [data] = useState(carsCatalog);
    const classes = useStyles();

    return (
        <div>
            <ul>
                {
                    <div className={classes.root}>
                        {cars.map(car => (<ImageCard extended={false} car={ car }/>))}
                        {data.length === 0 && <span>No records found to display!</span>}
                    </div>
                }
            </ul>
        </div>
    )
}



export default DataFetching
