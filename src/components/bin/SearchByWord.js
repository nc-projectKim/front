import React from 'react';
// import {Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import './css/AddNote.css';

const inputStyles = {
    fontFamily: 'Arial, FontAwesome'
};

const SearchByWord = () => {
    return (
        <div className="panel-body">
            <form >
                <label htmlFor="Search Word">Enter a search term</label>
                <input className="word-search" style={inputStyles} type="text" name="Search Word" placeholder="&#xf002; Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchByWord;