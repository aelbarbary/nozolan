import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './styles.css';

const styles = theme => ({

});

function Divider(props) {
  return (<hr className="hr-text" data-content={props.text}/>);
}


export default withStyles(styles)(Divider);
