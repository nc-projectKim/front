import React from 'react';
import PropTypes from 'prop-types';
import './css/EditExpense.css';
import deleteExpense from '../utilities/deleteExpense.utilities';
import editExpense from '../utilities/editExpense.utilities';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {every} from 'underscore';

class EditExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseDate: moment(this.props.expense.expenseDate).utc(),
            currency: this.props.expense.currency,
            chargeTo: this.props.expense.chargeTo,
            haveReceipt: this.props.expense.haveReceipt,
            justDeleted: false,
            justEdited: false,
            amount: {
                value: this.props.expense.amount,
                touched: false
            },
            description: {
                value: this.props.expense.description,
                touched: false
            },
            errors: {
                amount: '',
                description: ''
            },
            invalidEntries: false
        };
        this.dateChange = this.dateChange.bind(this);
        this.amountChange = this.amountChange.bind(this);
        this.chargeToChange = this.chargeToChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.haveReceiptChange = this.haveReceiptChange.bind(this);
        this.editExpenseSubmit = this.editExpenseSubmit.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
    }
    render() {
        let amountStyling = this.state.errors.amount ? 'textInputError' : 'textInput'; 
        return (
            <div>
                {this.state.invalidEntries &&
                    <h3 className="errorMessage">Unable to submit form</h3>
                }
                {this.state.justDeleted &&
                    <Redirect to={'/expenses/deleted'} />
                }
                {this.state.justEdited &&
                    <Redirect to={'/expenses/edited'} />
                }
                <div className='panel panel-default'>
                    <div className="expenses">
                        <h3 className="panel-title">Edit Expense</h3>
                    </div>
                    <div className="panel-body">
                        <div className="container">
                        <form onSubmit={this.editExpenseSubmit} method="post">
                            <div>
                                <label htmlFor="dateOfExpense">Date of Expense</label>
                                <br />
                                    <DatePicker
                                        placeholderText='Click to select a date'
                                        dateFormat="DD/MM/YYYY"
                                        selected={this.state.expenseDate}
                                        onChange={this.dateChange}
                                        isClearable={true}
                                    />
                            </div>
                            <div>
                                <label htmlFor="expenseAmount">Amount</label>
                                <br />
                                <span>£</span>
                                <span><input className={amountStyling} required name="expenseAmount" onChange={this.amountChange} type="text" placeholder="0.00" defaultValue={this.props.expense.amount} /></span>
                                <p className="errorMessage">{this.state.errors.amount}</p>
                            </div>
                            <div>
                                <label htmlFor="chargeTo">Charge To</label>
                                <br />
                                <input className="titleInput" type="text" onChange={this.chargeToChange} name="chargeTo" placeholder="client" defaultValue={this.props.expense.chargeTo} />
                            </div>
                            <div>
                                <label htmlFor="expenseDescription">Expense Description</label>
                                <br />
                                <textarea className="expenseInput" name="expenseDescription" onChange={this.descriptionChange} type="text" defaultValue={this.props.expense.description} required placeholder="expense description..." />
                                <p className="errorMessage">{this.state.errors.description}</p>
                            </div>
                            <div>
                                <label htmlFor="receipt">Have Receipt?</label>
                                <br />
                                <select onChange={this.haveReceiptChange}>
                                    <optgroup label="Do you have a receipt?">
                                        <option value="no">no</option>
                                        <option value="yes">Yes</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div>
                                <button className="btn btn-default expenses-buttons" type="submit">Save Changes</button>
                                <button className="btn btn-default expenses-buttons" onClick={this.props.editExpense} type="button">Cancel</button>
                                <button className="btn btn-default expenses-buttons" onClick={this.deleteExpense.bind(null, this.props.id)} type="button">Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    dateChange (date) {
        this.setState({
            expenseDate: date
        });
    }
    amountChange(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        newState.amount.value = e.target.value;
        newState.amount.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, {errors}));
    }
    chargeToChange(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }
    descriptionChange(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        newState.description.value = e.target.value;
        newState.description.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, {errors}));
    }
    haveReceiptChange(e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    editExpenseSubmit(e) {
        e.preventDefault();
        if (every(this.state.errors, field => field.length === 0)) {
        const editedExpense = {
            expenseDate: moment(this.state.expenseDate).format('x'),
            currency: 'GBP',
            amount: e.target[1].value,
            chargeTo: e.target[2].value,
            description: e.target[3].value,
            haveReceipt: e.target[4].value,            
            expenseId: this.props.id
        };
        editExpense(editedExpense)
            .then(() => {
                console.log('expenseEdited');
                return (
                this.setState({
                    justEdited: true
                })
                );
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            this.setState({
                invalidEntries: true
            });
        }
    }
    deleteExpense (id) {
        deleteExpense(id)
            .then(() => {
                console.log('deleted');
                this.setState({
                    justDeleted: true
                });

            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default EditExpense;

EditExpense.propTypes = {
    expense: PropTypes.object.isRequired,
    editExpense: PropTypes.func.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
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
