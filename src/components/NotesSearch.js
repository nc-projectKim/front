import React from 'react';
// import {Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './css/NotesSearch.css';
import SearchByWord from './SearchByWord';
import SearchByDate from './SearchByDate';



class NotesSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 'Search By Word'
        };
        this.searchExpand = this.searchExpand.bind(this);
        // this.textChange = this.textChange.bind(this);
    }
    render() {
        return (
            <div>

                <div className="panel panel-default">
                        <div onClick={this.searchExpand} className="panel-heading">
                            <h3 className="panel-title">Search By Word</h3>
                            <button type="button"
                                    onClick={this.props.toggleNoteSearch}
                                    className="btn btn-info">Return to Notes</button>
                        </div>
                    {
                        this.state.open === 'Search By Word'
                            ? <SearchByWord />
                            : null
                    }
                </div>
                <div className="panel panel-default">
                        <div onClick={this.searchExpand} className="panel-heading">
                            <h3 className="panel-title">Search By Date Added</h3>
                            <button type="button"
                                    onClick={this.props.toggleNoteSearch}
                                    className="btn btn-info">Return to Notes</button>
                        </div>
                    {this.state.open === 'Search By Date Added'
                        ? <SearchByDate />
                        : null
                    }
                </div>
            </div>
        );
    }
    searchExpand (e) {
        this.setState ({
            open: e.target.textContent
        });
    }
}


export default NotesSearch;

NotesSearch.propTypes = {
    toggleNoteSearch: PropTypes.func.isRequired
    // handleSubmit: PropTypes.func.isRequired
};