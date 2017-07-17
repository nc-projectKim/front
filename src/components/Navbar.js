import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="navbar-inner">
                        <div className="container">
                            <a className="brand" href="#">K.I.M</a>
                            <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                                <span className="icon-bar">Home</span>
                                <span className="icon-bar">About</span>
                                <span className="icon-bar">Contact</span>
                            </a>
                            <div className="nav-collapse collapse"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Navbar;