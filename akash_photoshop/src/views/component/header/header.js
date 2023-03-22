import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Navbar.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <div className="logo">
  <span className="logo-text">Akash Gatha</span>
</div>
          </Typography>
          <Button
            color="inherit"
            className={classes.link}
            component={Link}
            to="/"
            onClick={() => handlePageChange('home')}
            style={{ fontWeight: currentPage === 'home' ? 'bold' : 'normal' }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            className={classes.link}
            component={Link}
            to="/about"
            onClick={() => handlePageChange('about')}
            style={{ fontWeight: currentPage === 'about' ? 'bold' : 'normal' }}
          >
            About
          </Button>
          <Button
            color="inherit"
            className={classes.link}
            component={Link}
            to="/contact"
            onClick={() => handlePageChange('contact')}
            style={{ fontWeight: currentPage === 'contact' ? 'bold' : 'normal' }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
