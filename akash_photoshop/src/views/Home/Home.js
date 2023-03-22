import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import ImageCarousel from '../component/home_carausel';
import Gallery from "../galary";
import './home.css';
import Services from '../services';
import ContactForm from '../contact/contact_form'






function Home() {
 
  
  return (
    <div className='home_style'>
      <ImageCarousel/>
      <h1>Services</h1>
      <Services/>
      <h1>Galary</h1>
      <Gallery/>
      <h1>Contact Us </h1>
      <ContactForm/>
      
    </div>
  )
}

export default Home;
