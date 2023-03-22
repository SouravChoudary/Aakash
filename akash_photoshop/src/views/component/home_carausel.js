import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: 'auto',
  },
  carousel: {
    height: 'auto',
  },
  slide: {
    padding: '20px',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  p: {
    position: 'absolute',
    top: 40,
    right: 0,
    padding: '10px',
    color:'#fff'
  },
});

function ImageCarousel(props) {
  const classes = useStyles();

  const items = [
    {
      src: 'https://source.unsplash.com/1600x900/?nature,water',
      alt: 'Nature',
    },
    {
      src: 'https://source.unsplash.com/1600x900/?nature,forest',
      alt: 'Forest',
    },
    {
      src: 'https://source.unsplash.com/1600x900/?nature,beach',
      alt: 'Beach',
    },
  ];

  return (
    <div>
      <Carousel className={classes.carousel}>
        {items.map((item, i) => (
          <Paper
            key={i}
            className={classes.slide}
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <h2>{item.alt}</h2>
          </Paper>
        ))}
      </Carousel>
      <p className={classes.p}>a</p>
      </div>
  );
}

export default ImageCarousel;
