import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import './css/EditExpense.css';
=======
import './css/EditNote.css';
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
import deleteExpense from '../utilities/deleteExpense.utilities';
import editExpense from '../utilities/editExpense.utilities';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
<<<<<<< HEAD
import {every} from 'underscore';
=======
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756

class EditExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseDate: moment(this.props.expense.expenseDate).utc(),
            currency: this.props.expense.currency,
<<<<<<< HEAD
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
=======
            amount: this.props.expense.amount,
            chargeTo: this.props.expense.chargeTo,
            description: this.props.expense.description,
            haveReceipt: this.props.expense.haveReceipt,
            justDeleted: false,
            justEdited: false
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
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
<<<<<<< HEAD
        let amountStyling = this.state.errors.amount ? 'textInputError' : 'textInput'; 
        return (
            <div>
                {this.state.invalidEntries &&
                    <h3 className="errorMessage">Unable to submit form</h3>
                }
=======
        console.log(this.props.id);
        return (
            <div>
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
                {this.state.justDeleted &&
                    <Redirect to={'/expenses/deleted'} />
                }
                {this.state.justEdited &&
                    <Redirect to={'/expenses/edited'} />
                }
<<<<<<< HEAD
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
                    {/* <div>
                        <label htmlFor="currency">Currency</label>
                        <br />
                        <input className="titleInput" type="text" onClick={this.currencyChange} name="currency" placeholder="GBP" />
                    </div>*/}
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
                        <button className="btn btn-success" type="submit">Save Changes</button>
                        <button className="btn btn-warning" onClick={this.props.editExpense} type="button">Cancel</button>
                        <button className="btn btn-danger" onClick={this.deleteExpense.bind(null, this.props.id)} type="button">Delete</button>
                    </div>
                </form>
            </div>
        );
    }
    dateChange (date) {
=======
                <div className='panel panel-default'>
                    <div className="panel-heading">
                        <h3 className="panel-title">Edit Expense</h3>
                    </div>
                    <div className="panel-body">
                        <div className="container">
                            <form onSubmit={this.editExpenseSubmit} method="post">
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="dateOfExpense"><h4>Date of Expense</h4></label>
                                    <div className="col-sm-8">
                                        <DatePicker
                                            placeholderText='Click to select a date'
                                            dateFormat="DD/MM/YYYY"
                                            selected={this.state.expenseDate}
                                            onChange={this.dateChange}
                                            isClearable={true}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="expenseAmount"><h4>Amount</h4></label>
                                    <div className="col-sm-8">
                                        <input className="form-control" name="expenseAmount" onChange={this.amountChange} type="text" placeholder="£" defaultValue={this.props.expense.amount} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="chargeTo"><h4>Charge To</h4></label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" onChange={this.chargeToChange} name="chargeTo" placeholder="client" defaultValue={this.props.expense.chargeTo} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="expenseDescription"><h4>Expense Description</h4></label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control editDescription" name="expenseDescription" onChange={this.descriptionChange} type="text" defaultValue={this.props.expense.description} placeholder="expense description..." />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="receipt"><h4>Have Receipt?</h4></label>
                                    <div className="col-sm-8">
                                        <select className="custom-select" onChange={this.haveReceiptChange}>
                                            <optgroup label="Do you have a receipt?">
                                                <option value="no">no</option>
                                                <option value="yes">Yes</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div className="inline-bt">
                                    <button className="btn btn-success" type="submit">Save Changes</button>
                                </div>
                                <div className="inline-bt">
                                    <button className="btn btn-warning" onClick={this.props.editExpense} type="button">Cancel</button>
                                </div>
                                <div className="inline-bt">
                                    <button className="btn btn-danger" onClick={this.deleteExpense.bind(null, this.props.id)} type="button">Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    dateChange(date) {
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
        console.log(date);
        // e.preventDefault();
        this.setState({
            expenseDate: date
        });
    }
    amountChange(e) {
        e.preventDefault();
<<<<<<< HEAD
        const newState = Object.assign({}, this.state);
        newState.amount.value = e.target.value;
        newState.amount.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, {errors}));
=======
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
    }
    chargeToChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }
    descriptionChange(e) {
        e.preventDefault();
<<<<<<< HEAD
        const newState = Object.assign({}, this.state);
        newState.description.value = e.target.value;
        newState.description.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, {errors}));
=======
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
    }
    haveReceiptChange(e) {
        console.log(e.target.value);
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    editExpenseSubmit(e) {
<<<<<<< HEAD
        e.preventDefault();
        if (every(this.state.errors, field => field.length === 0)) {
=======
        console.dir(e.target);
        e.preventDefault();
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
        const editedExpense = {
            expenseDate: moment(this.state.expenseDate).format('x'),
            currency: 'GBP',
            amount: e.target[1].value,
            chargeTo: e.target[2].value,
            description: e.target[3].value,
<<<<<<< HEAD
            haveReceipt: e.target[4].value,            
            expenseId: this.props.id
        };
=======
            haveReceipt: e.target[4].value,
            expenseId: this.props.id
        };
        console.log(editedExpense);
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
        editExpense(editedExpense)
            .then(() => {
                console.log('expenseEdited');
                return (
<<<<<<< HEAD
                this.setState({
                    justEdited: true
                })
=======
                    this.setState({
                        justEdited: true
                    })
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
                );
            })
            .catch((err) => {
                console.log(err);
            });
<<<<<<< HEAD
        } else {
            this.setState({
                invalidEntries: true
            });
        }
    }
    deleteExpense (id) {
=======
    }
    deleteExpense(id) {
        // e.preventDefault();
        console.log(id);
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
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
<<<<<<< HEAD
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
=======
    // expense: PropTypes.expense.isRequired,
    editExpense: PropTypes.func.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
