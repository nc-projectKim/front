import React, { Component } from 'react';
import EditNote from './EditNote';
import FilteredNotesList from './FilteredNotesList';
import PropTypes from 'prop-types';
// import * as actions from '../actions/actions';
import {connect} from 'react-redux';


class FilteredNotes extends Component {
    constructor (props) {
        super(props);
        this.state = {
            edit: false,
            noteId: '',
            filteredNotes: null
        };
        this.editNote = this.editNote.bind(this);
    }
    componentDidMount () {
            this.setState({
                notes: this.props.filteredNotes
            });
    }
    render () {
        return (
            <div className="FilteredNotes-main">
                {this.state.edit
                    ? <EditNote editNote={this.editNote} note={this.props.filteredNotes[this.state.noteId]} />
                    : <FilteredNotesList
                        notes={this.props.filteredNotes}
                        addNewNote={this.addNewNote}
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

function mapStateToProps (state) {
    return {
        filteredNotes: state.filteredData
    };
}

FilteredNotes.propTypes = {
    filteredNotes: PropTypes.any.isRequired,
    getFilteredNotes: PropTypes.func.isRequired
};

// export default FilteredNotes;
export default connect(mapStateToProps)(FilteredNotes);