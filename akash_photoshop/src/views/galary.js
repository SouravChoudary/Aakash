import { Grid, Card, CardMedia, CardContent, Typography, Modal, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import React,{useState} from 'react';
import '../App.css'



const useStyles = makeStyles((theme) => ({
    galleryContainer: {
      paddingTop: theme.spacing(4),
      width: '100%',
    margin: 0,
    },

    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    cardMedia: {
      paddingTop: '40%', // adjust as needed
    },
    cardContent: {
      flexGrow: 1,
    },
    imageModal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageModalContent: {
      position: 'relative',
      maxWidth: '80vw', // adjust as needed
      maxHeight: '80vh', // adjust as needed
      backgroundColor: theme.palette.background.paper,
      outline: 'none',
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
    },
    closeButton: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
   
  }));
  

const Gallery = () => {
    const classes = useStyles();
    const [selectedImage, setSelectedImage] = useState(null);
  
    const images = [
      {
        url: 'https://source.unsplash.com/user/c_v_r/100×100',
        caption: 'Image 1',
        // any other relevant information
      },
      {
        url: 'https://source.unsplash.com/user/c_v_r/100×100',
        caption: 'Image 1',
        // any other relevant information
      },
      {
        url: 'https://source.unsplash.com/user/c_v_r/100×100',
        caption: 'Image 1',
        // any other relevant information
      },
      {
        url: 'https://source.unsplash.com/user/c_v_r/100×100',
        caption: 'Image 1',
        // any other relevant information
      },
      {
        url: 'https://source.unsplash.com/user/c_v_r/100×100',
        caption: 'Image 1',
        // any other relevant information
      },
      {
        url: 'https://picsum.photos/id/237/200/300',
        caption: 'Image 2',
        // any other relevant information
      },
      // add more images as needed
    ];
  
    const openImageViewer = (url) => {
      setSelectedImage(url);
    };
  
    const closeImageViewer = () => {
      setSelectedImage(null);
    };
  
    return (
      <div className={classes.galleryContainer}>
        <Grid container spacing={2} className={classes.galleryContainer}>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.url} onClick={() => openImageViewer(image.url)}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={image.url} title={image.caption} />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {image.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Modal open={Boolean(selectedImage)} onClose={closeImageViewer} className={classes.imageModal}>
          <div className={classes.imageModalContent}>
            <IconButton className={classes.closeButton} onClick={closeImageViewer}>
              <Close />
            </IconButton>
            <img src={selectedImage} alt="Full-size image" />
          </div>
        </Modal>
      </div>
    );
  };
  export default Gallery