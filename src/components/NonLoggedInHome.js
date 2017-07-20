import React, { Component } from 'react';
import PageTop from './PageTop';
import Entries from './Entries';
import './css/NonLoggedInHome.css';

class LoggedInHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameTouched: false,
            passwordTouched: false
        };
        this.usernameClickHandler = this.usernameClickHandler.bind(this);
        this.passwordClickHandler = this.passwordClickHandler.bind(this);
    }
    render() {
        return (
            <div className="component-mainPage col-xs-10 col-xs-offset-1">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h3>Log In</h3>
                        <form method="post">
                            <div className="form-group">
                                <label className="form-label" htmlFor="username">
                                    username
                                </label>
                                <br />
                                <input onClick={this.usernameClickHandler} type="text" className="form-input" name="username" placeholder="username" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label className="form-label" htmlFor="password">
                                    password
                            </label>
                                <br />
                                <input onClick={this.passwordClickHandler} type="text" className="form-input" name="password" placeholder="password" />
                            </div>
                            <button className="btn btn-success form-submit-button" type="submit">Log in</button>
                        </form>
                        <button className="btn btn-primary form-create-account-button">Create Account</button>
                    </div>
                </div>
            </div>
        );
    }
    usernameClickHandler() {
        this.setState({
            usernameTouched: true
        });
    }
    passwordClickHandler() {
        this.setState({
            passwordTouched: true
        });
    }
}
export default LoggedInHome;