import React, { Component } from 'react';
import Entries from './Entries';
import './css/Home.css';
import getAllNotes from '../utilities/getAllNotes.utilities';

class LoggedInHome extends Component {
    constructor (props) {
        super (props);
        this.state = {
            notes: null
        };
    }

    componentDidMount () {
        getAllNotes()
        .then ((notes) => {
        this.setState({
            notes: notes
        });
        })
        .catch(err => {
            console.log(err);
        });
    }
    render () {
        return (
            <div className='component-mainPage'>
                <Entries notes={this.state.notes}/>
            </div>
        );
    }
}
export default LoggedInHome;