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
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './css/Notes.css';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesSearch: false
        };
        this.toggleNoteSearch = this.toggleNoteSearch.bind(this);
    }

    render() {
        return (
            <div className='notes-page'>
                <Welcome className='notes-welcome'
                    messageTitle={'Kim\'s notes'} />
                <Switch>
                    <Route exact path='/notes' component={MainNotesPage}/>
                    <Route path='/notes/search' component={NotesSearch} />
                </Switch>
                {/*{this.state.notesSearch
                    ? <NotesSearch toggleNoteSearch={this.toggleNoteSearch} />
                    : <MainNotesPage toggleNoteSearch={this.toggleNoteSearch} />
                }*/}
            </div>
        );
    }
    toggleNoteSearch() {
        this.setState({
            notesSearch: !this.state.notesSearch
        });
    }
}
export default NotesList;

NotesList.propTypes = {
    // view: PropTypes.bool.isRequired,
    // add: PropTypes.bool.isRequired,
    // addNewNote: PropTypes.func.isRequired,
    // notes: PropTypes.object.isRequired,
    // viewMore: PropTypes.func.isRequired,
    // editNote: PropTypes.func.isRequired,
    // toggleNoteSearch: PropTypes.func.isRequired

};