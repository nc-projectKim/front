import React, { Component } from 'react';
import NotesList from './NotesList';
import EditNote from './EditNote';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class LatestNotes extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            noteId: '',
            notes: null
        };
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
                ? <EditNote id={this.state.noteId} editNote={this.editNote} note={this.props.notes[this.state.noteId]}/>
                : <NotesList
                    heading={'Latest Notes'}
                    view={this.state.view}
                    notes={this.props.notes}
                    viewMore={this.viewMore}
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
}

function mapDispatchToProps (dispatch) {
    return {
        getNotes: () => {
            dispatch(actions.getNotes());
        }
    };
}

function mapStateToProps (state) {
    return {
        notes: state.data,
    };
}


LatestNotes.propTypes = {
    notes: PropTypes.any,
    getNotes: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(LatestNotes);