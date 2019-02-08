import React, { Fragment } from 'react';
import { Typography, withStyles, Grid } from '@material-ui/core';
import img from '../assests/img/kamal_pic.jpg';

const styles = theme => ({
  about: { marginBottom: '20px' },
  intro: {
    maxWidth: '500px',
    margin: 'auto',
    padding: '10px 30px',
  },
  img: {
    margin: '30px 10px 15px 10px',
    maxHeight: '175px',
    maxWidth: '200px',
    borderRadius: '5px',
  },
});

const About = ({ classes }) => {
  return (
    <div className={classes.about}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <img src={img} alt="selfie" className={classes.img} />
        </Grid>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h5" gutterBottom>
          Muhammad Kamal
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.intro} align="center" variant="subtitle1">
          Welcome to my portfolio page. I am a self taught web developer. I like to create dynamic,
          user-friendly, and responsive web apps.
        </Typography>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(About);
