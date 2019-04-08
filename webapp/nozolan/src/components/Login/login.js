import React, { Component } from 'react';
// import { auth, googleProvider, facebookProvider } from '../../lib/firebase.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  signInButton: {
    width: '100%',
    fontSize: 15,
    backgroundColor: 'black',
    color: 'gray',
    height: 50
  },
  social:{
    marginTop: 20,
    marginBottom: 20,
    margin: 100
  }
});

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };

  }

  componentWillReceiveProps(nextProps){
    this.setState({open: nextProps.open});
  }

  handleClose(){
    this.setState({ open: false });
  }

  handleChange = name => event => {
   this.setState({ [name]: event.target.value });
 };

  render() {
    const { classes } = this.props;
    return (
      <Dialog
          open={this.state.open}
          onClose={()=> this.handleClose()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign In to Continue</DialogTitle>
          <DialogContent>
          <TextField
              id="email"
              label="email"
              className={classes.input}
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
                id="password"
                label="password"
                className={classes.input}
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            <Button variant="outlined" color="inherit" className={classes.signInButton}>
              Sign In
            </Button>
            <Link to="www.google.com"> Forget your password </Link>
            <Divider style={{ margin: 30}} />
            <GoogleLoginButton onClick={this.googleLogin} className={classes.social}/>
            <FacebookLoginButton onClick={this.facebookLogin} className={classes.social}/>

          </DialogContent>

        </Dialog>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Login));
