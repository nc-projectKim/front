import React, { Component } from 'react';
import RowTitle from './RowTitle';
import NoteCard from './NoteCard';
import PanelButtons from './PanelButtons';
// import PanelButtonsMinimised from './PanelButtonsMinimised';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import AddNote from './AddNote';
import './css/NotesList.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import alterValues from './component-utilities/alterValues'

class NotesPageNotesList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const editNote = this.props.editNote;
        const alteredValues = alterValues(this.props.notes);
        return (
            <div>
                {this.props.newSubmit &&
                    <div>
                        <div>Note submitted!</div>
                        <Redirect to='/notes'/>
                    </div>
                }
                    <div className='panel panel-default'>
                        <div className="panel-heading">

                            <span>
                                <h3 className="panel-title"><span>{this.props.heading}</span></h3>
                                <Link to="/notes/search" ><button type="button"
                                    className="btn btn-info srch-btn">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                                </Link>
                            </span>
                            {/* <h3 className="panel-title"><span>{this.props.heading}</span>/</h3>
                                <Link to="/notes/search" ><button type="button"
                                    className="btn btn-info srch-btn">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </Link>*/}
                        </div>

                        <div className="panel-body">
                            <div className="container">
                                <RowTitle />
                                {map(alteredValues, function (note) {
                                    return (
                                        <NoteCard iD={note[0]} key={note[1].created} note={note[1]} editNote={editNote} />
                                    );
                                })}
                                <PanelButtons
                                    addNewNote={this.props.addNewNote}
                                    viewMore={this.viewMore} />
                            </div>
                        </div>
                    </div>
                {this.props.add
                    ? <AddNote submitNote={this.props.submitNote}/* addNewNote={this.props.addNewNote}*/ />
                    : null}
            </div>
        );
    }
}


export default NotesPageNotesList;

NotesPageNotesList.propTypes = {
    add: PropTypes.bool.isRequired,
    addNewNote: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired,
    submitNote: PropTypes.func.isRequired,
    newSubmit: PropTypes.bool.isRequired
};