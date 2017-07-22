import React, { Component } from 'react';
import RowTitle from './RowTitle';
import NoteCard from './NoteCard';
import PanelButtons from './PanelButtons';
import PanelButtonsMinimised from './PanelButtonsMinimised';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import AddNote from './AddNote';
import './css/NotesList.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import addNote from '../utilities/addNote.utilities';

class NotesList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newSubmit: false,
            add: false,
            view: false
        };
        this.submitNote = this.submitNote.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
        this.viewMore = this.viewMore.bind(this);
    }
    render () {
        const editNote = this.props.editNote;
        return (
            <div>
                {this.state.newSubmit &&
                    <div>
                        <div>Note submitted!</div>
                        <Redirect to='/welcome'/>
                    </div>
                }
                {this.state.view
                    ?
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
                                {map(this.props.notes, function (note, key) {
                                    return (
                                        <NoteCard iD={key} key={note.created} note={note} editNote={editNote} />
                                    );
                                })}
                                <PanelButtons
                                    addNewNote={this.addNewNote}
                                    viewMore={this.viewMore} />
                            </div>
                        </div>
                    </div>
                    : <div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Latest Notes</h3>
                                <PanelButtonsMinimised
                                    addNewNote={this.addNewNote}
                                    viewMore={this.viewMore} />
                            </div>
                        </div>
                    </div>
                }
                {this.state.add
                    ? <AddNote submitNote={this.submitNote}/* addNewNote={this.props.addNewNote}*/ />
                    : null}
            </div>
        );
    }
    submitNote (e) {
        e.preventDefault();
        const newNoteObj = {
            title: e.target[0].value,
            text: e.target[1].value,
            tags: e.target[2].value.split(',')
        };
        addNote(newNoteObj)
            .then(() => {
                return (
                    this.setState({
                        newSubmit: !this.state.newSubmit,
                        add: !this.state.add,
                        view: true
                    })
                );
            })
            .catch(err => {
                console.log(err);
            });
    }
    addNewNote () {
        this.setState({
            add: !this.state.add
        });
    }
    viewMore () {
        this.setState({
            view: !this.state.view
        });
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addNote: (note) => {
//             dispatch(actions.)
//         }
//     }
// }

export default NotesList;

NotesList.propTypes = {
    // view: PropTypes.bool.isRequired,
    add: PropTypes.bool.isRequired,
    addNewNote: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired,
    // viewMore: PropTypes.func.isRequired,
    editNote: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired
};