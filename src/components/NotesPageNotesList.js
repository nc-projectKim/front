import React, { Component } from 'react';
import NoteRowTitle from './NoteRowTitle';
import NoteCard from './NoteCard';
import NotesPanelButtons from './NotesPanelButtons';
// import NotesPanelButtonsMinimised from './NotesPanelButtonsMinimised';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import AddNote from './AddNote';
import './css/NotesList.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import alterValues from './component-utilities/alterValues';

class NotesPageNotesList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const editNote = this.props.editNote;
        const alteredValues = alterValues(this.props.notes);
        return (
            <div>
                    <div className='panel panel-default'>
                        <div className="panel-heading">

                            <span>
                                <h3 className="panel-title"><span>{this.props.heading}</span></h3>
                                <Link to="/expenses/search" ><button type="button"
                                    className="btn btn-info srch-btn">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                                </Link>
                            </span>
                        </div>

                        <div className="panel-body">
                            <div className="container">
                                <NoteRowTitle />
                                {map(alteredValues, function (note) {
                                    return (
                                        <div>
                                        {note[0] !== 'undefined'
                                        ? <div>
                                            <NoteCard iD={note[0]} key={note[1].created} note={note[1]} editNote={editNote} />
                                            </div>
                                        : null}
                                        </div>
                                    );
                                })}
                                <NotesPanelButtons
                                    addNewNote={this.props.addNewNote}
                                    viewMore={this.viewMore} />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}


export default NotesPageNotesList;

NotesPageNotesList.propTypes = {
    // add: PropTypes.bool.isRequired,
    // addNewNote: PropTypes.func.isRequired,
    // notes: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired,
    // submitNote: PropTypes.func.isRequired,
    newSubmit: PropTypes.bool.isRequired
};