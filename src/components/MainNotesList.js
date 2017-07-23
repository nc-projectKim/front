import React, { Component } from 'react';
import NotesPageNotesList from './NotesPageNotesList';
import EditNote from './EditNote';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import addNote from '../utilities/addNote.utilities';


class MainNotesList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            add: false,
            edit: false,
            noteId: '',
            notes: null,
            newSubmit: false
        };
        this.addNewNote = this.addNewNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.submitNote = this.submitNote.bind(this);
    }
    componentDidMount () {
        this.props.getNotes();
        this.setState({
            notes: this.props.notes
        });
    }
    // componentWillReceiveProps(newProps) {
    //     if (this.props.notes && newProps.notes !== this.props.notes) {
    //     console.log(this.props.notes, newProps.notes);
    //         newProps.getNotes();
    //         this.setState({
    //             add: false,
    //         });
    //     }
    // }
    render () {
        return (
            <div>
                { this.state.edit
                ? <EditNote editNote={this.editNote} note={this.state.notes[this.state.noteId]}/>
                : <NotesPageNotesList
                    heading={'Latest Notes'}
                    notes={this.props.notes}
                    addNewNote={this.addNewNote}
                    viewMore={this.viewMore}
                    add={this.state.add}
                    editNote={this.editNote}
                    submitNote={this.submitNote}
                    newSubmit={this.state.newSubmit}
                />
                }
            </div>
        );
    }
    editNote (id) {
        this.setState({
            edit: !this.state.edit,
            noteId: id
        });
    }
    addNewNote () {
        this.setState({
            add: !this.state.add
        });
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
                this.props.getNotes();
            })
            .then(() => {
                return (
                    this.setState({
                        newSubmit: !this.state.newSubmit,
                        add: !this.state.add,
                    })
                );
            })
            .catch(err => {
                console.log(err);
            });
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNotes: () => {
            dispatch(actions.getNotes());
        }
    };
}

function mapStateToProps(state) {
    return {
        notes: state.data,
    };
}


MainNotesList.propTypes = {
    notes: PropTypes.object.isRequired,
    getNotes: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(MainNotesList);