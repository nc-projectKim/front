import React, { Component } from 'react';
import LoggedInHome from './LoggedInHome';
// import NonLoggedInHome from './NonLoggedInHome';
import Notes from './Notes';
import KimNavbar from './Navbar';
import Entries from './Entries';
import PageTabs from './PageTabs';
import CreateUser from './CreateUser';
import './css/App.css';
import firebase from 'firebase';
import { provider } from './FirebaseConfig';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            data: null,
        };
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

            } else {
                // No user is signed in.
            }
        });
    }
    render() {
        return (
            <Router>
                <div className='page'>
                    <KimNavbar user={this.state.currentUser} loginWithFacebook={this.loginWithFacebook} logOut={this.logOut}/>
                    <PageTabs />
                    {!this.state.currentUser &&
                        <button className="btn btn-primary" onClick={this.loginWithFacebook}>Login with Facebook</button>
                    }
                    {this.state.currentUser &&
                        <Switch>
                            <Route exact path='/welcome' component={LoggedInHome} />
                            <Route path='/notes' component={Notes} />
                            <Route path='/createuser' component={CreateUser} />
                        </Switch>
                    }
                </div>
            </Router>
        );
    }
    loginWithFacebook() {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            this.setState({
                currentUser: result.user,
                userThere: true
            });
        }.bind(this));
    }
    logOut() {
        firebase.auth().signOut().then(function () {
            this.setState({
                currentUser: null,
                userThere: false
            });
        }.bind(this));
    }
}
export default App;