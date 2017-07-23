import React, { Component } from 'react';
import LatestNotes from './LatestNotes';
// import NotesSearch from './NotesSearch';
import PageTop from './PageTop';
import './css/Entries.css';
// import PropTypes from 'prop-types';


class Entries extends Component {
    render () {
        return (
            <div className="entries-main">
                <PageTop />
                <LatestNotes />
            </div>
        );
    }
}
export default Entries;

Entries.propTypes = {
};