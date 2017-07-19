import React from 'react';
// import {Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import './css/AddNote.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import OneDateSearch from './OneDateSearch';
import BetweenSearch from './BetweenSearch';


class SearchByDate extends React.Component {
    render() {

        return (
            <div className="panel-body">
                <OneDateSearch/>
                <BetweenSearch/>
            </div>
        );
    }
}

export default SearchByDate;