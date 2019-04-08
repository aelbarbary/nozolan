import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import { SharedDataConsumer } from '../../context/SharedData.context.js';

import withRoot from '../withRoot';


const styles = theme => ({
  App:{
    margin: 0
  },


});

class Store extends Component {
  state = {}

  render() {
    return (
      <h1>landing page - new store</h1>
    );
  }
}

Store.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withRouter(withStyles(styles)(Store)));
