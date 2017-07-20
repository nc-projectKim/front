import React, { Component } from 'react';
import PageTop from './PageTop';
import Entries from './Entries';
import './css/NonLoggedInHome.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function validate(newState) {
    const errors = {};

    if (newState.usernameTouched) {
        if (!newState.username) errors.username = 'Please enter your username';
        if (!(/\S+@\w+\.\w+/g.test(newState.username))) errors.username = 'Please enter a valid email address';
        else errors.username = null;
    }

    if (newState.passwordTouched) {
        if (!newState.password) errors.password = 'Please enter your password';
        if (!(/\S+@\w+\.\w+/g.test(newState.username))) errors.username = 'Please enter a valid email address';
        else errors.password = null;
    }
    return errors;
}

class LoggedInHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameTouched: false,
            passwordTouched: false,
            errors: {
                username: null,
                password: null
            }
        };
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    render() {
        return (
            <div className="component-mainPage col-xs-10 col-xs-offset-1">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h3>Create User</h3>
                        <form onSubmit={this.submitHandler} type="post">
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    email address
                                </label>
                                <br />
                                <input onChange={this.usernameChangeHandler} type="text" className="form-input" name="email" placeholder="username" />
                                <p className="error-text">{this.state.errors.username}</p>
                            </div>
                            <br />
                            <div className="form-group">
                                <label className="form-label" htmlFor="password">
                                    password
                            </label>
                                <br />
                                <input onClick={this.passwordChangeHandler} type="password" className="form-input" name="password" placeholder="password" />
                                <p className="error-text">{this.state.errors.password}</p>
                            </div>
                            <button className="btn btn-success form-submit-button" type="submit">Log in</button>
                        </form>
                        <Link to={'/createuser'}><button className="btn btn-primary form-create-account-button">Create Account</button></Link>
                    </div>
                </div>
            </div>
        );
    }
    usernameChangeHandler(e) {
        const newState = Object.assign({}, this.state, { usernameTouched: true }, {username: e.target.value});
        const errors = validate(newState);
        this.setState(Object.assign(newState, { errors })); 
    }
    passwordChangeHandler(e) {
        const newState = Object.assign({}, this.state, { passwordTouched: true }, {password: e.target.value});
        const errors = validate(newState);
        this.setState(Object.assign(newState, { errors })); 
    }
    submitHandler (e) {
    }
}
export default LoggedInHome;