import React, {Component} from 'react';
import Home from './Home';
import KimNavbar from './Navbar';
import './css/App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <Router>
                <div className='page'>
                    <KimNavbar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                </div>
            </Router>  
        );
    }
}
export default App;