import React, { Component } from 'react';
import NotesList from './NotesList';
import EditNote from './EditNote';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import _ from 'underscore';

class LatestNotes extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            add: false,
            edit: false,
            noteId: '',
            notes: null
        };
        this.addNewNote = this.addNewNote.bind(this);
        this.editNote = this.editNote.bind(this);
    }
    componentDidMount () {
        this.props.getNotes();
        this.setState({
            notes: this.props.notes
        });
    }
    render () {
        return (
            <div>
                { this.state.edit
                ? <EditNote editNote={this.editNote} note={this.state.notes[this.state.noteId]}/>
                : <NotesList
                    heading={'Latest Notes'}
                    view={this.state.view}
                    notes={this.props.notes}
                    addNewNote={this.addNewNote}
                    viewMore={this.viewMore}
                    add={this.state.add}
                    editNote={this.editNote}
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


LatestNotes.propTypes = {
    notes: PropTypes.object.isRequired,
    getNotes: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(LatestNotes);