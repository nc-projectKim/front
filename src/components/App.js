import React, { Component } from 'react';
import LoggedInHome from './LoggedInHome';
import NonLoggedInHome from './NonLoggedInHome';
import Notes from './Notes';
import KimNavbar from './Navbar';
import Entries from './Entries';
import PageTabs from './PageTabs';
import CreateUser from './CreateUser';
import './css/App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    render() {
        return (
            <Router>
                <div className='page'>
                    <KimNavbar />
                    <PageTabs />
                    <Switch>
                        <Route exact path='/' component={NonLoggedInHome} />
                        <Route exact path='/welcome' component={LoggedInHome} />
                        <Route path='/notes' component={Notes} />
                        <Route path='/createuser' component={CreateUser} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;