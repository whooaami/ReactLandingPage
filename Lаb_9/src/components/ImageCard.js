import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 430,
      background: 'rgba(0,0,0,0.5)',
      margin: '20px',
      paddingBottom: '15px',
    },
    media: {
      height: 440,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
    },
    paragraph: {
        fontSize: '1.1rem',
        color: '#fff',
    },
    fullParagraph: {
        fontSize: '1.1rem',
        color: '#fff',
    },
    price: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#fff',
    },
  });
  
  export default function ImageCard({ car, extended }) {
    const classes = useStyles();
    const url = `/catalog/ItemPage/${car.id}`;
  
    return (
        <Card className={classes.root}>
            <CardMedia 
            className={classes.media} 
            image={car.imageUrl} 
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    { car.title }
                </Typography>
                
                <Typography variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
                    { car.paragraph }
                </Typography> 
                
                {extended ?
                <Typography variant="body2" color="textSecondary" component="p" className={classes.fullParagraph}>
                    { car.fullParagraph }
                </Typography>
                : null}

                <Typography variant="h5" color="textSecondary" component="h2" className={classes.price}>
                    { car.price }
                </Typography>
            </CardContent>
            {!extended ?
            <Link to={ url } >
                <button className="button" onClick={console.log('')}>View more</button>
            </Link>
            : null}
        </Card>
    );
  }
