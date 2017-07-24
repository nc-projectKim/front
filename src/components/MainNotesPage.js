import React, { Component } from 'react';
import MainNotesList from './MainNotesList';
// import EditNote from './EditNote';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class MainNotesPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            noteId: '',
            notes: null
        };
        this.viewMore = this.viewMore.bind(this);
    }
    componentDidMount () {
        this.props.getNotes();
        this.setState({
            view: true,
            add: false,
            notes: this.props.notes
        });
    }

    render () {
        return (
            <div>
                     <MainNotesList
                        heading={'My Notes'}
                        notes={this.props.notes}
                        viewMore={this.viewMore}
                        editNote={this.editNote}
                    />

            </div>
        );
    }
    viewMore () {
        this.setState({
            view: !this.state.view
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
        notes: state.data
    };
}

MainNotesPage.propTypes = {
    notes: PropTypes.any.isRequired,
    getNotes: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(MainNotesPage);