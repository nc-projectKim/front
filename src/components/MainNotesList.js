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
            edit: false,
            noteId: '',
            notes: null,
            newSubmit: false
        };
        this.editNote = this.editNote.bind(this);
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
                ? <EditNote editNote={this.editNote} note={this.props.notes[this.state.noteId]}/>
                : <NotesPageNotesList
                    heading={'Latest Notes'}
                    notes={this.props.notes}
                    viewMore={this.viewMore}
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