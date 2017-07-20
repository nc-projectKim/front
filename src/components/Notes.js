import React, { Component } from 'react';
import RowTitle from './RowTitle';
import NoteCard from './NoteCard';
import PanelButtons from './PanelButtons';
import PanelButtonsMinimised from './PanelButtonsMinimised';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import NotesSearch from './NotesSearch';
import AddNote from './AddNote';
import Welcome from './Welcome';
import MainNotesPage from './MainNotesPage';
import FilteredNotes from './FilteredNotes';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/Notes.css';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='notes-page'>
                <Welcome className='notes-welcome'
                    messageTitle={'Kim\'s notes'} />
                <Switch>
                    <Route exact path='/notes' component={MainNotesPage}/>
                    <Route exact path='/notes/search' component={NotesSearch} />
                    <Route path='/notes/search/result' component={FilteredNotes} />
                </Switch>
            </div>
        );
    }
}
export default NotesList;

NotesList.propTypes = {

};