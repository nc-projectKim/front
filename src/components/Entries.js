import React, { Component } from 'react';
import LatestNotes from './LatestNotes';
import NotesSearch from './NotesSearch';


class Entries extends Component {
    constructor (props) {
        super (props);
        this.state = {
            notesSearch: false
        }
        this.toggleNoteSearch = this.toggleNoteSearch.bind(this);
    }
    render () {
        return (
            <div>

                { this.state.notesSearch
                ? <NotesSearch toggleNoteSearch={this.toggleNoteSearch}/>
                : <LatestNotes toggleNoteSearch={this.toggleNoteSearch}/>
                }
            </div>
        );
    }
    toggleNoteSearch() {
        this.setState({
            notesSearch: !this.state.notesSearch
        });
    }
}
export default Entries;