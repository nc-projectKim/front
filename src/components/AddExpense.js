import React from 'react';
// import PropTypes from 'prop-types';
<<<<<<< HEAD
import './css/AddExpense.css';
=======
import './css/AddNote.css';
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import addExpense from '../utilities/addExpense.utilities';
<<<<<<< HEAD
import {every} from 'underscore';

class AddExpense extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newSubmit: false,
            dateSelect: moment().utc(),
            amount: {
                value: '',
                touched: false
            },
            description: {
                value: '',
                touched: false
            },
            errors: {
                amount: '',
                description: ''
            },
            invalidEntries: false
        };
        this.submitExpense = this.submitExpense.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
    }
    render () {
        let amountStyling = this.state.errors.amount ? 'textInputError' : 'textInput'; 
        return (
            <div>
                {this.state.invalidEntries &&
                    <h3 className="errorMessage">Unable to submit form</h3>
                }
                { this.state.newSubmit &&
=======

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
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
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
<<<<<<< HEAD
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
                                    <span><input className={amountStyling} required onChange={this.changeAmount} name="expenseAmount" type="text" placeholder="5.99" /></span>
                                    <p className="errorMessage">{this.state.errors.amount}</p>
                                </div>
                                <div>
                                    <label htmlFor="chargeTo">Charge To</label>
                                    <br />
                                    <input className="textInput" type="text" name="chargeTo" placeholder="Client Name" />
                                </div>
                                <div>
                                    <label htmlFor="expenseDescription">Expense Description</label>
                                    <br />
                                    <textarea required className="expenseInput" onChange={this.changeDescription} name="expenseDescription" type="text" placeholder="expense description..." />
                                    <p className="errorMessage">{this.state.errors.description}</p>
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
=======
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
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
<<<<<<< HEAD
    handleChange (date) {
        this.setState({
            dateSelect: date,
            dateTouched: true
        });
    }
    changeAmount (e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        newState.amount.value = e.target.value;
        newState.amount.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, {errors}));
    }
    changeDescription (e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        newState.description.value = e.target.value;
        newState.description.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, {errors}));
    }
    submitExpense (e) {
        e.preventDefault();
        if (every(this.state.errors, field => field.length === 0)) {
=======
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
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
        const newExpenseObj = {
            expenseDate: moment(e.target[0].value).format('x'),
            currency: 'GBP',
            amount: e.target[1].value,
            chargeTo: e.target[2].value,
            description: e.target[3].value,
            haveReceipt: e.target[4].value
        };
<<<<<<< HEAD
=======
        console.log('what adding', newExpenseObj);
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
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
<<<<<<< HEAD
        } else {
            this.setState({
                invalidEntries: true
            });
        }
=======
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
    }
}


export default AddExpense;

AddExpense.propTypes = {
    // addNewExpense: PropTypes.func.isRequired,
    // submitExpense: PropTypes.func.isRequired
<<<<<<< HEAD
};
function validate (state) {
    const errors = {};

    // test amounts
            let decimal = false;
            let place = state.amount.value.indexOf('.');
            if ((place > -1) && (state.amount.value.indexOf('.', place + 1) >= 0)) decimal = true;
            if (decimal) {
                errors.amount = 'Please only enter one decimal point';
            } else if (/[^(\d|\.]/g.test(state.amount.value)) {
                errors.amount = 'Please enter only numbers';
            } else if (state.amount.touched && state.amount.value.length < 1) {
                errors.amount = 'Please enter a valid amount';
            } else errors.amount = '';
    // test description
            if (state.description.touched && (state.description.value.length < 1)) errors.description = 'Please enter a description';
            else errors.description = '';
        return errors;
    }
=======
};
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
