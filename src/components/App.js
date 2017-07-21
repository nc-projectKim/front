import React, { Component } from 'react';
import LoggedInHome from './LoggedInHome';
// import NonLoggedInHome from './NonLoggedInHome';
import Notes from './Notes';
import KimNavbar from './Navbar';
import Entries from './Entries';
import PageTabs from './PageTabs';
import CreateUser from './CreateUser';
import './css/App.css';
import firebase, { facebookProvider, auth, database } from './FirebaseConfig';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentUser: null,
            data: null
        };
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    componentDidMount () {
        firebase.auth().onAuthStateChanged((currentUser) => {
            console.log('AUTH STATE HAS CHANGED!');
            if (currentUser) {
                this.setState({ currentUser });

            } else {
                // WHEN AUTH FAILS
            }
        });
    }
    render () {
        return (
            <Router>
                <div className='page'>
                    <KimNavbar user={this.state.currentUser} loginWithFacebook={this.loginWithFacebook} logOut={this.logOut} />
                    {!this.state.currentUser &&
                        <button className="btn btn-primary" onClick={(this.loginWithFacebook)}>Login with Facebook</button>
                    }
                    {this.state.currentUser &&
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
            this.setState({
                currentUser: null,
                loggedIn: false
            });
        });
    }
}
export default App;