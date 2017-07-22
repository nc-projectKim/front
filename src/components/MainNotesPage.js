import React, { Component } from 'react';
import MainNotesList from './MainNotesList';
import EditNote from './EditNote';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class MainNotesPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            add: false,
            edit: false,
            noteId: '',
            notes: null
        };
        this.viewMore = this.viewMore.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
        this.editNote = this.editNote.bind(this);
    }
    componentDidMount () {
        this.props.getNotes();
        this.setState({
            view: true,
            add: false,
            notes: this.props.notes
        });
    }
    // componentWillReceiveProps(newProps) {
    //     console.log('new Props');
    //     if (this.props.notes && newProps.notes !== this.props.notes) {
    //         newProps.getNotes();
    //         this.setState({
    //             view: true,
    //             add: false,
    //             notes: newProps.notes
    //         });
    //     }
    // }
    render () {
        return (
            <div>
                {this.state.edit
                    ? <EditNote editNote={this.editNote} note={notes[this.state.noteId]} />
                    : <MainNotesList
                        heading={'My Notes'}
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
    viewMore () {
        this.setState({
            view: !this.state.view
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
        notes: state.data
    };
}

MainNotesPage.propTypes = {
    notes: PropTypes.object.isRequired,
    getNotes: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(MainNotesPage);