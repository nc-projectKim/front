import React from 'react';
// import {Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import './css/AddNote.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';



class SearchByDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()

        }

        this.handleChange = this.handleChange.bind(this);
        this.submitDate = this.submitDate.bind(this);
        
    }
    render() {

        return (
            <div className="panel-body">
                <DatePicker selected={this.state.startDate} onChange={this.handleChange} isClearable={true} dateFormat="DD/MM/YYYY"/>
                <form onSubmit={this.submitDate}>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        );
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    submitDate(e) {
        e.preventDefault();
        console.log(this.state.startDate._d);
    }
}

export default SearchByDate;