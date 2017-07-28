import React from 'react';
import PropTypes from 'prop-types';
// import './css/NotesSearch.css';
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

class NotesSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment().utc(),
            endDate: moment().utc(),
            searchOneDateClicked: false,
            searchStartDateClicked: false,
            searchEndDateClicked: false,
            notesQueried: false
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
                    this.state.notesQueried &&
                    <Redirect to={'/notes/search/result'} />
                }
                <div className="panel panel-default">
                    <div className="notes-search">

                        <h3 className="panel-title">Search Notes</h3>
                        <Link to="/notes"> <button type="button"
                            className="btn btn-default notes-buttons">Return to Notes</button>
                            </Link>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input className="word-search" style={inputStyles} type="text" name="Search Word" placeholder="&#xf002; Search" />
                        {/*<p>If you want to search for a tag, put a # before your search term</p>*/}
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
                        <button className="btn btn-default notes-buttons" type="submit">Search</button>
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
        let searchOneDate = moment(this.state.startDate._d).format('x');
        let searchBetweenDateStart = moment(this.state.startDate._d).format('x');
        let searchBetweenDateEnd = moment(this.state.endDate._d).format('x');

        let obj = {
            dateItems: {}
        };
        if (searchTerm.includes('#')) obj.queryTags = searchTerm;
        else if (searchTerm.length > 0) {
            obj.findWord = searchTerm;
            obj.queryTags = [];
        }
        else {
            obj.findWord = null;
            obj.queryTags = [];
        }
        
        if (this.state.searchOneDateClicked && !this.state.searchStartDateClicked) {
            obj.dateItems.from = searchOneDate;
            obj.dateItems.to = searchOneDate;
            obj.dateItems.dateChosen = 'lastEditTime';
        }
        else if (this.state.searchStartDateClicked) {
            obj.dateItems.from = searchBetweenDateStart;
            obj.dateItems.to = searchBetweenDateEnd;
            obj.dateItems.dateChosen = 'lastEditTime';
        }
        else {
            obj.dateItems.from = null;
            obj.dateItems.to = null;
            obj.dateItems.dateChosen = 'lastEditTime';
        }
        this.setState({
            notesQueried: true
        });
    return this.props.getFilteredNotes(obj);
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getFilteredNotes: (obj) => {
            dispatch(actions.getQueryNotes(obj));
        }
    };
}


// export default NotesSearch;
export default connect (null, mapDispatchToProps)(NotesSearch);

NotesSearch.propTypes = {
    getFilteredNotes: PropTypes.func.isRequired
};
