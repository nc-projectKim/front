import React from 'react';
// import {Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import './css/AddNote.css';

const inputStyles= {
    fontFamily: 'Arial, FontAwesome'
}

const SearchByDate = () => {
    return (
        <div className="panel-body">
            <form >
                
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchByDate;