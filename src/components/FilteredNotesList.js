import React, { Component } from 'react';
import NoteRowTitle from './NoteRowTitle';
import NoteCard from './NoteCard';
import NotesPanelButtons from './NotesPanelButtons';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class NotesList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const editNote = this.props.editNote;
        return (
            <div>
                 <div>
                        <div className='panel panel-default'>
                            <div className="notes-search">
                                <h3 className="panel-title">Search results</h3>
                                <Link to="/notes/search" ><button type="button"
                                    onClick={this.props.toggleNoteSearch}
                                    className="btn btn-default notes-buttons">Change Search</button>
                                </Link>
                            </div>

                            <div className="panel-body">
                                <div className="container">
                                    <NoteRowTitle />
                                    {map(this.props.notes, function (note, key) {
                                        return (
                                            <NoteCard iD={key} key={`${note.created}${key}`} note={note} editNote={editNote} />
                                        );
                                    })}
                                    <NotesPanelButtons
                                        viewMore={this.props.viewMore} />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default NotesList;

NotesList.propTypes = {
    view: PropTypes.bool.isRequired,
    add: PropTypes.bool.isRequired,
    addNewNote: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired,
    viewMore: PropTypes.func.isRequired,
    editNote: PropTypes.func.isRequired,
    toggleNoteSearch: PropTypes.func.isRequired

};