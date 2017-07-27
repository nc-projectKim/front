import React from 'react';
// import PropTypes from 'prop-types';
import './css/AddNote.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import addExpense from '../utilities/addExpense.utilities';

class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newSubmit: false,
            dateSelect: moment().utc()
        };
        this.submitExpense = this.submitExpense.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                {
                    this.state.newSubmit &&
                    <div>
                        <div>Expense submitted!</div>
                        <Redirect to={'/expenses'} />
                    </div>
                }
                <div className='panel panel-default'>
                    <div className="panel-heading">
                        <h3 className="panel-title">New Expense</h3>
                    </div>
                    <div className="panel-body">
                        <div className="container">
                            <form onSubmit={this.submitExpense} method="post">
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="dateOfExpense"><h4>Date of Expense</h4></label>
                                    <div className="col-sm-8">
                                        <DatePicker
                                            placeholderText='Click to select a date'
                                            dateFormat="DD/MM/YYYY"
                                            selected={this.state.dateSelect}
                                            onChange={this.handleChange}
                                            isClearable={true}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="expenseAmount"><h4>Amount</h4></label>
                                    <div className="col-sm-8">
                                        <input className="form-control" name="expenseAmount" type="text" placeholder="£" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="chargeTo"><h4>Charge To</h4></label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" name="chargeTo" placeholder="Client Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="expenseDescription"><h4>Expense Description</h4></label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control inputDescription" name="expenseDescription" type="text" placeholder="expense description..." />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="receipt"><h4>Have Receipt?</h4></label>
                                    <div className="col-sm-8">
                                        <select className="custom-select">
                                            <optgroup name="receipt" label="Do you have a receipt?">
                                                <option value="no">no</option>
                                                <option value="yes">Yes</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div className="inline-bt">
                                    <button className="btn btn-success btn-lg" type="submit">Submit</button>
                                </div>
                                <div className="inline-bt">                                
                                    <Link to='/expenses'><button className="btn btn-danger btn-lg" type="button">Cancel</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handleChange(date) {
        this.setState({
            dateSelect: date,
            // searchOneDateClicked: true
        });
        console.log(this.state.dateSelect);
    }
    submitExpense(e) {
        e.preventDefault();
        console.dir(e.target);
        const newExpenseObj = {
            expenseDate: moment(e.target[0].value).format('x'),
            currency: 'GBP',
            amount: e.target[1].value,
            chargeTo: e.target[2].value,
            description: e.target[3].value,
            haveReceipt: e.target[4].value
        };
        console.log('what adding', newExpenseObj);
        addExpense(newExpenseObj)
            .then(() => {
                return (
                    this.setState({
                        newSubmit: !this.state.newSubmit,
                    })
                );
            })
            .catch(err => {
                console.log(err);
            });
    }
}


export default AddExpense;

AddExpense.propTypes = {
    // addNewExpense: PropTypes.func.isRequired,
    // submitExpense: PropTypes.func.isRequired
};