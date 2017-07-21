import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoggedInHome from './LoggedInHome';
// import NonLoggedInHome from './NonLoggedInHome';
import Notes from './Notes';
import KimNavbar from './Navbar';
import Entries from './Entries';
import PageTabs from './PageTabs';
import CreateUser from './CreateUser';
import './css/App.css';
import firebase, { facebookProvider, auth, database } from './FirebaseConfig';
import {connect} from 'react-redux';
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from 'react-redux-firebase';
import * as actions from '../actions/actions';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor (props) {
        super(props);
        // this.state = {
        //     currentUser: null,
        //     data: null
        // };
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    componentDidMount () {
        firebase.auth().onAuthStateChanged((currentUser) => {
            console.log('AUTH STATE HAS CHANGED!');
            if (currentUser) {
                this.props.logInUser(currentUser);
            } else {
                // WHEN AUTH FAILS
            }
        });
    }
    render () {
        const {currentUser} = this.props;
        return (
            <Router>
                <div className='page'>
                    <KimNavbar user={currentUser} loginWithFacebook={this.loginWithFacebook} logOut={this.logOut} />
                    {!currentUser &&
                        <button className="btn btn-primary" onClick={(this.loginWithFacebook)}>Login with Facebook</button>
                    }
                    {currentUser &&
                        <div>
                            <PageTabs />
                            <Switch>
                                <Route exact path='/welcome' component={LoggedInHome} />
                                <Route path='/notes' component={Notes} />
                                <Route path='/createuser' component={CreateUser} />
                            </Switch>
                        </div>
                    }
                </div>
            </Router>
        );
    }
    loginWithFacebook () {
        firebase.auth().signInWithPopup(facebookProvider);
    }
    logOut () {
        firebase.auth().signOut().then(() => {
            this.props.logOutUser();
        });
    }
}

App.propTypes = {
    logInUser: PropTypes.func.isRequired,
    logOutUser: PropTypes.func.isRequired,
    currentUser: PropTypes.any.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    logInUser: (currentUser) => {
        if (!currentUser) return;
        dispatch(actions.logInUser(currentUser));
    },
    logOutUser: () => {
      dispatch(actions.logOutUser());
    }
  };
}

function mapStateToProps (state) {
    console.log(state);
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);