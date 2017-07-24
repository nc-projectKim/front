import React from 'react';
// import {Field, reduxForm } from 'redux-form';
// import PropTypes from 'prop-types';
import './css/AddNote.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class BetweenSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment().utc(),
            endDate: moment().utc()

        };

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.submitDate = this.submitDate.bind(this);
    }
    render () {

        return (
            <div>
                <h4>Search Between Dates</h4>
                <div>
                    Start date:<DatePicker selected={this.state.startDate} selectsStart startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeStart} />
                </div>
                <div>
                    End date:<DatePicker selected={this.state.endDate} selectsEnd startDate={this.state.startDate} endDate={this.state.endDate} onChange={this.handleChangeEnd} />
                </div>
                <form onSubmit={this.submitDate}>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        );
    }
    handleChangeStart (date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd (date) {
        this.setState({
            endDate: date
        });
    }
    submitDate (e) {
        e.preventDefault();
        let startDate = moment(this.state.startDate._d).format('x');
        let endDate = moment(this.state.startDate._d).format('x');
    }
}

export default BetweenSearch;