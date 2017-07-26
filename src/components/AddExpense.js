import React from 'react';
// import PropTypes from 'prop-types';
// import './css/AddExpense.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import addExpense from '../utilities/addExpense.utilities';

class AddExpense extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newSubmit: false,
            dateSelect: moment().utc()
        };
        this.submitExpense = this.submitExpense.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render () {
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
                                <div>
                                    <label htmlFor="dateOfExpense">Date of Expense</label>
                                    <br />
                                    <DatePicker
                                        placeholderText='Click to select a date'
                                        dateFormat="DD/MM/YYYY"
                                        selected={this.state.dateSelect}
                                        onChange={this.handleChange}
                                        isClearable={true}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="expenseAmount">Amount</label>
                                    <br />
                                    <span>£</span>
                                    <span><input className="expenseInput" name="expenseAmount" type="text" placeholder="5.99" /></span>
                                </div>
                                <div>
                                    <label htmlFor="chargeTo">Charge To</label>
                                    <br />
                                    <input className="titleInput" type="text" name="chargeTo" placeholder="Client Name" />
                                </div>
                                <div>
                                    <label htmlFor="expenseDescription">Expense Description</label>
                                    <br />
                                    <textarea className="expenseInput" name="expenseDescription" type="text" placeholder="expense description..." />
                                </div>
                                <div>
                                    <label htmlFor="receipt">Have Receipt?</label>
                                    <br />
                                    <select>
                                        <optgroup name="receipt" label="Do you have a receipt?">
                                            <option value="no">no</option>
                                            <option value="yes">Yes</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-success" type="submit">Submit</button>
                                    <Link to='/expenses'><button className="btn btn-warning" type="button">Cancel</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handleChange (date) {
        this.setState({
            dateSelect: date,
            // searchOneDateClicked: true
        });
        console.log(this.state.dateSelect);
    }
    submitExpense (e) {
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