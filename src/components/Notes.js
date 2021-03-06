import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotesSearch from './NotesSearch';
import Welcome from './Welcome';
import MainNotesPage from './MainNotesPage';
import FilteredNotes from './FilteredNotes';
import AddNote from './AddNote';
import { connect } from 'react-redux';
import DeleteNote from './DeleteNote';
import NoteHasBeenEdited from './NoteHasBeenEdited';
import NoMatch from './NoMatch';


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
                <div className='notes-welcome'>
                    <Welcome
                        picture={'http://res.cloudinary.com/dl37xtqhv/image/upload/v1501154233/kim_wclvcm.png'}
                        messageTitle={`${userFirstName}'s notes`} 
                    />
                    <Switch>
                        <Route exact path='/notes' component={MainNotesPage}/>
                        <Route exact path='/notes/add' component={AddNote}/>
                        <Route exact path='/notes/search' component={NotesSearch} />
                        <Route path='/notes/search/result' component={FilteredNotes} />
                        <Route path='/notes/deleted' component={DeleteNote} />
                        <Route path='/notes/edited' component={NoteHasBeenEdited} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
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