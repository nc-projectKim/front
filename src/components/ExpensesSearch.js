import React from 'react';
import PropTypes from 'prop-types';
// import './css/NotesqSearch.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
// import queryNote from '../utilities/queryNote.utilities';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';


const inputStyles = {
    fontFamily: 'Arial, FontAwesome'
};

class ExpensesSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment().utc(),
            endDate: moment().utc(),
            searchOneDateClicked: false,
            searchStartDateClicked: false,
            searchEndDateClicked: false,
            expensesQueried: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }
    render () {
        return (
            <div>
                {
                    this.state.expensesQueried &&
                    <Redirect to={'/expenses/search/result'} />
                }
                <div className="panel panel-default">
                    <div className="panel-heading">

                        <h3 className="panel-title">Search Expenses</h3>
                        <Link to="/expenses"> <button type="button"
                            className="btn btn-info">Return to Expenses</button>
                            </Link>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input className="word-search" style={inputStyles} type="text" name="Search Word" placeholder="&#xf002; Search" />
                        <select>
                            <optgroup label="Choose how to search">
                                <option value="Search all">All</option>
                                <option value="Search charge to">Charge To</option>
                            </optgroup>
                        </select>
                        
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
    searchExpand (e) {
        this.setState({
            open: e.target.textContent
        });
    }
    handleChange (date) {
        this.setState({
            startDate: date,
            searchOneDateClicked: true
        });
    }
    handleChangeStart (date) {
        this.setState({
            startDate: date,
            searchStartDateClicked: true 
        });
    }
    handleChangeEnd (date) {
        this.setState({
            endDate: date,
            searchEndDateClicked: true
        });
    }
    handleSubmit (e) {
        e.preventDefault();
        let searchTerm = e.target[0].value;
        let searchParameters = e.target[1].selectedOptions[0].text;
        let searchOneDate = moment(this.state.startDate._d).format('x');
        let searchBetweenDateStart = moment(this.state.startDate._d).format('x');
        let searchBetweenDateEnd = moment(this.state.endDate._d).format('x');

        let obj = {
            dateItems: {},
            queryItems: {}
        };
        if (searchParameters === 'Charge To') {
            obj.findWord = null;
            obj.queryItems.chargeTo = searchTerm;
        }
        else if (searchTerm.length > 0) {
            obj.findWord = searchTerm;
            obj.queryItems.chargeTo = null;
        }
        else {
            obj.findWord = null;
            obj.queryItems.chargeTo = null;
        }
        
        if (this.state.searchOneDateClicked && !this.state.searchStartDateClicked) {
            obj.dateItems.from = searchOneDate;
            obj.dateItems.to = searchOneDate;
            obj.dateItems.dateChosen = 'expenseDate';
        }
        else if (this.state.searchStartDateClicked) {
            obj.dateItems.from = searchBetweenDateStart;
            obj.dateItems.to = searchBetweenDateEnd;
            obj.dateItems.dateChosen = 'expenseDate';
        }
        else {
            obj.dateItems.from = null;
            obj.dateItems.to = null;
            obj.dateItems.dateChosen = 'expenseDate';
        }

        obj.queryItems.haveReceipt = null;
        
        this.setState({
            expensesQueried: true
        });
        console.log(obj);
    // return this.props.getFilteredExpenses(obj);
    }
}

// function mapDispatchToProps (dispatch) {
//     return {
//         getFilteredNotes: (obj) => {
//             dispatch(actions.getQueryNotes(obj));
//         }
//     };
// }


export default ExpensesSearch;
// export default connect (null, mapDispatchToProps)(NotesSearch);

// NotesSearch.propTypes = {
//     getFilteredNotes: PropTypes.func.isRequired
// };
