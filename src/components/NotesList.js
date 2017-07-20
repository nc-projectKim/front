import React, { Component } from 'react';
import RowTitle from './RowTitle';
import NoteCard from './NoteCard';
import PanelButtons from './PanelButtons';
import PanelButtonsMinimised from './PanelButtonsMinimised';
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
                {this.props.view
                    ? 
                        <div className='panel panel-default'>
                            <div className="panel-heading">
                                <h3 className="panel-title">{this.props.heading}</h3>
                                <Link to="/notes/search" ><button type="button"
                                    className="btn btn-info">Search</button>
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
                    : <div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Latest Notes</h3>
                                <PanelButtonsMinimised
                                    addNewNote={this.props.addNewNote}
                                    viewMore={this.props.viewMore} />
                            </div>
                        </div>
                    </div>
                }
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
    heading: PropTypes.string.isRequired
};