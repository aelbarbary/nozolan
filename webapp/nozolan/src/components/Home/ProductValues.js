import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from '../Common/LayoutBody';
import Typography from '../Common/Typography';
import curvyLines from '../../assets/images/productCurvyLines.png';
import suitcase from '../../assets/images/productValues1.svg';
import graph from '../../assets/images/productValues2.svg';
import clock from '../../assets/images/productValues3.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  layoutBody: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src={curvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={suitcase}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Islamic Services
              </Typography>
              <Typography variant="h5">
                {'Find all coming-up events scheduled for local mosques, register for activities and programs'}
                {'and be part of Muslims in Seattle community.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={graph}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Services
              </Typography>
              <Typography variant="h5">
                {'Carpenting, roofing, plumping ... etc'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={clock}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Catering
              </Typography>
              <Typography variant="h5">
                {'Access all Halal markets, catering services and resturants that serve hala food.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
