import React, { Component } from 'react';
// import RowTitle from './RowTitle';
// import NoteCard from './NoteCard';
// import NotesPanelButtons from './NotesPanelButtons';
// import NotesPanelButtonsMinimised from './NotesPanelButtonsMinimised';
// import { map } from 'underscore';
import PropTypes from 'prop-types';
import NotesSearch from './NotesSearch';
// import AddNote from './AddNote';
import Welcome from './Welcome';
import MainNotesPage from './MainNotesPage';
import FilteredNotes from './FilteredNotes';
import AddNote from './AddNote';
import { connect } from 'react-redux';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/Notes.css';

class NotesList extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    render () {
        const userFirstName = this.props.currentUser.displayName.split(' ')[0];
        return (
            <div className='notes-page'>
                <Welcome className='notes-welcome'
                    picture={this.props.currentUser.photoURL}
                    messageTitle={`${userFirstName}'s notes`} 
                    />
                <Switch>
                    <Route exact path='/notes' component={MainNotesPage}/>
                    <Route exact path='/notes/add' component={AddNote}/>
                    <Route exact path='/notes/search' component={NotesSearch} />
                    <Route path='/notes/search/result' component={FilteredNotes} />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps (state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(NotesList);

NotesList.propTypes = {
    currentUser: PropTypes.object.isRequired,
};