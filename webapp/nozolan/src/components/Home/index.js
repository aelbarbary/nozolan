import React, { Component } from 'react';
import OfferList from '../Offer/List';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MySnackBar from  '../Common/MySnackBar.js';
import {withRouter} from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Root from '../Root.js';
import queryString from 'query-string';
import { SharedDataConsumer } from '../../context/SharedData.context.js';
import ProductCategories from './ProductCategories';
import ProductSmokingHero from './ProductSmokingHero';
import AppFooter from './AppFooter';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';
import AppAppBar from './AppAppBar';
import withRoot from '../withRoot';

const styles = theme => ({
  App:{
    margin: 0
  },
  footer:{
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  emailLink:{
    color: 'white',
    fontSize: 15
  },
  offers:{

  }

});

class Home extends Component {
  state = {query : '',
          alertOpen: false,
          alertMessage: '',
          category: ''
          }

  componentWillReceiveProps(nextProps){
    this.readSearchQuery(nextProps);
  }

  componentWillMount(){
    if (this.props.location.state !== undefined){
      this.setState(
        {
          alertOpen: this.props.location.state.alertOpen,
          alertMessage: this.props.location.state.alertMessage,
        });
      this.props.history.replace({
          pathname: '/',
          state: { alertOpen: false,
                  alertMessage: ''
           }
        })
    }
    this.readSearchQuery(this.props);

  }

  handleTabChange = (event, category) => {
    if (category === "events"){
      this.setState({category: category});
      this.props.history.push({
             pathname: `/search`,
             search: `?onlyEvents=true`
           });
    } else
    {
      this.setState({category: category, query: category});
      this.props.history.push({
             pathname: `/search`,
             search: `?query=${category}`
           });
    }
  };

  readSearchQuery(props){
    var path = this.props.history.location.search;
    const values = queryString.parse(path.split('?')[1]);
    var query = values.query;
    var zipcode = values.zipcode;
    var onlyEvents = values.onlyEvents;
    this.setState({query: query, zipcode: zipcode, onlyEvents: onlyEvents});
  }
  render() {
    const { classes } = this.props;
    const {alertOpen, alertMessage} = this.state;

    return (
      <SharedDataConsumer>
        {({ user }) => (
          <React.Fragment>
            <AppAppBar />
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
            <AppFooter />
          </React.Fragment>
      )}
      </SharedDataConsumer>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withRouter(withStyles(styles)(Home)));
