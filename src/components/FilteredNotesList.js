import React, { Component } from 'react';
import RowTitle from './RowTitle';
import NoteCard from './NoteCard';
import PanelButtons from './PanelButtons';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import AddNote from './AddNote';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class NotesList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const editNote = this.props.editNote;
        return (
            <div>
                 <div>
                        <div className='panel panel-default'>
                            <div className="panel-heading">
                                <h3 className="panel-title">Search results</h3>
                                <Link to="/notes/search" ><button type="button"
                                    onClick={this.props.toggleNoteSearch}
                                    className="btn btn-info">Change Search</button>
                                </Link>
                            </div>

                            <div className="panel-body">
                                <div className="container">
                                    <RowTitle />
                                    {map(this.props.notes, function (note, key) {
                                        return (
                                            <NoteCard iD={key} key={note.created} note={note} editNote={editNote} />
                                        );
                                    })}
                                    <PanelButtons
                                        addNewNote={this.props.addNewNote}
                                        viewMore={this.props.viewMore} />
                                </div>
                            </div>
                        </div>
                    </div>
                {this.props.add
                    ? <AddNote addNewNote={this.props.addNewNote} />
                    : null}
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