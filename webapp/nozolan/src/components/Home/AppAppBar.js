import React, {Component} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../Common/AppBar';
import Toolbar, { styles as toolbarStyles } from '../Common/Toolbar';
import Login from '../Login/login.js';
import Register from '../Register/';
const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

class AppAppBar extends Component{
  state ={ loginOpen: false, registerOpen: false};
  handleSignIn = () => {
      this.setState({ loginOpen: true, registerOpen: false });
    };

  handleRegister = () => {
      this.setState({ registerOpen: true,  loginOpen: false});
    };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/premium-themes/onepirate"
            >
              {'nozolan'}
            </Link>
            <div className={classes.right}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
                onClick={() => this.handleSignIn()}
              >
                {'Sign In'}
              </Link>
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.linkSecondary)}
                onClick={() => this.handleRegister()}
              >
                {'Sign Up'}
              </Link>

              <Login open ={this.state.loginOpen}/>
              <Register open ={this.state.registerOpen}/>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </div>
    );
  }

}


AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
