import React, {Component} from 'react';
import Home from './Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                </div>
            </Router>  
        );
    }
}
export default App;