import React from 'react';
// import {Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';

const SearchByWord = () => {
    return (
        <div className="panel-body">
            <form >
                <label htmlFor="Search Word">Enter a tag:&nbsp;&nbsp;&nbsp;</label>
                <input className="word-search" type="text" name="Search Word" defaultValue="#"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    );
}; 

export default SearchByWord;