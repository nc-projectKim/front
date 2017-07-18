import React, { Component } from 'react';
import LatestNotes from './LatestNotes';
import NotesSearch from './NotesSearch';


class Entries extends Component {
    constructor (props) {
        super (props);
        this.state = {
            notesSearch: true
        }
    }
    render () {
        return (
            <div>

                { this.state.notesSearch
                ? <NotesSearch />
                : <LatestNotes />
                }
            </div>
        );
    }
}
export default Entries;