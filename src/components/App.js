import React, {Component} from 'react';
import Home from './Home';
import KimNavbar from './Navbar';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <Router>
                <div>
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