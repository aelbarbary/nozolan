import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '../Common/Button';
import Typography from '../Common/Typography';
import MainLayout from './MainLayout';

import backgroundImage from
  '../../assets/images/bg3.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d0', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Main(props) {
  const { classes } = props;

  return (
    <MainLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Muslims in Seattle Biggest Directory
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Now you can register your business for free.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={linkProps => (
          <Link {...linkProps} href="/store/" variant="button" />
        )}
      >
        Register your Business
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Be discoverable
      </Typography>
    </MainLayout>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
