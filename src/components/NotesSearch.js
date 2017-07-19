import React from 'react';
// import {Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './css/NotesSearch.css';
import SearchByWord from './SearchByWord';
import SearchByDate from './SearchByDate';
import SearchByTag from './SearchByTag';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';


const inputStyles = {
    fontFamily: 'Arial, FontAwesome'
};

class NotesSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment().utc(),
            endDate: moment().utc(),
            searchOneDateClicked: false,
            searchStartDateClicked: false,
            searchEndDateClicked: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">

                        <h3 className="panel-title">Search Notes</h3>
                        <Link to="/notes"> <button type="button"
                            className="btn btn-info">Return to Notes</button>
                            </Link>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input className="word-search" style={inputStyles} type="text" name="Search Word" placeholder="&#xf002; Search" />
                        <p>If you want to search for a tag, put a # before your search term</p>
                        <h4>Search on Date</h4>
                        <DatePicker
                            placeholderText='Click to select a date'
                            dateFormat="DD/MM/YYYY"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            isClearable={true}
                        />
                        <div>
                            <h4>Search Between Dates</h4>
                            <span>
                                Start date:<DatePicker
                                    placeholderText='Click to select a start date'
                                    selected={this.state.startDate}
                                    selectsStart
                                    dateFormat="DD/MM/YYYY"
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeStart}
                                    isClearable={true}

                                />
                            </span>
                            <span>
                                End date:<DatePicker
                                    selected={this.state.endDate}
                                    selectsEnd
                                    dateFormat="DD/MM/YYYY"
                                    placeholderText='Click to select a date'
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    isClearable={true}
                                    onChange={this.handleChangeEnd}
                                />
                            </span>
                        </div>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>

            </div>
        );
    }
    searchExpand(e) {
        this.setState({
            open: e.target.textContent
        });
    }
    handleChange(date) {
        this.setState({
            startDate: date,
            searchOneDateClicked: true
        });
    }
    handleChangeStart(date) {
        this.setState({
            startDate: date,
            searchStartDateClicked: true 
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date,
            searchEndDateClicked: true
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.dir(e.target);
        let searchTerm = e.target[0].value;
        let searchOneDate = moment(this.state.startDate._d).format('x');
        let searchBetweenDateStart = moment(this.state.startDate._d).format('x');
        let searchBetweenDateEnd = moment(this.state.endDate._d).format('x');

        let obj = {};
        if (searchTerm.includes('#')) obj.tags = searchTerm;
        else if (searchTerm.length > 0) obj.searchTerm = searchTerm;
        if (this.state.searchOneDateClicked && !this.state.searchStartDateClicked) obj.searchOneDate = searchOneDate;
        if (this.state.searchStartDateClicked) {
            obj.searchBetweenStartDate = searchBetweenDateStart;
            obj.searchBetweenEndDate = searchBetweenDateEnd;
        }
        console.log(obj);
    }
}


export default NotesSearch;

NotesSearch.propTypes = {
    toggleNoteSearch: PropTypes.func.isRequired
};
