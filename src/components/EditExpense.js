import React from 'react';
import PropTypes from 'prop-types';
import './css/EditNote.css';
import deleteExpense from '../utilities/deleteExpense.utilities';
import editExpense from '../utilities/editExpense.utilities';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class EditExpense extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            expenseDate: moment(this.props.expense.expenseDate).utc(),
            currency: this.props.expense.currency,
            amount: this.props.expense.amount,
            chargeTo: this.props.expense.chargeTo,
            description: this.props.expense.description,
            haveReceipt: this.props.expense.haveReceipt,
            justDeleted: false,
            justEdited: false
        };
        this.dateChange = this.dateChange.bind(this);
        this.amountChange = this.amountChange.bind(this);
        this.chargeToChange = this.chargeToChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.haveReceiptChange = this.haveReceiptChange.bind(this);
        this.editExpenseSubmit = this.editExpenseSubmit.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
    }
    render () {
        console.log(this.props.id);
        return (
            <div>
                {this.state.justDeleted &&
                    <Redirect to={'/expenses/deleted'} />
                }
                {this.state.justEdited &&
                    <Redirect to={'/expenses/edited'} />
                }
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
                        <span><input className="expenseInput" name="expenseAmount" onChange={this.amountChange} type="text" placeholder="0.00" defaultValue={this.props.expense.amount} /></span>
                    </div>
                    <div>
                        <label htmlFor="chargeTo">Charge To</label>
                        <br />
                        <input className="titleInput" type="text" onChange={this.chargeToChange} name="chargeTo" placeholder="client" defaultValue={this.props.expense.chargeTo} />
                    </div>
                    <div>
                        <label htmlFor="expenseDescription">Expense Description</label>
                        <br />
                        <textarea className="expenseInput" name="expenseDescription" onChange={this.descriptionChange} type="text" defaultValue={this.props.expense.description} placeholder="expense description..." />
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
        console.log(date);
        // e.preventDefault();
        this.setState({
            expenseDate: date
        });
    }
    amountChange (e) {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }
    chargeToChange (e) {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }
    descriptionChange (e) {
        e.preventDefault();
        console.log(e.target.value);
        this.setState ({
            title: e.target.value
        });
    }
    haveReceiptChange (e) {
        console.log(e.target.value);
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    editExpenseSubmit (e) {
        console.dir(e.target);
        e.preventDefault();
        const editedExpense = {
            expenseDate: moment(this.state.expenseDate).format('x'),
            currency: 'GBP',
            amount: e.target[1].value,
            chargeTo: e.target[2].value,
            description: e.target[3].value,
            haveReceipt: e.target[4].value,            
            expenseId: this.props.id
        };
        console.log(editedExpense);
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
    }
    deleteExpense (id) {
        // e.preventDefault();
        console.log(id);
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
    // expense: PropTypes.expense.isRequired,
    editExpense: PropTypes.func.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};