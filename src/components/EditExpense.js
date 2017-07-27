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
    constructor(props) {
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
    render() {
        console.log(this.props.id);
        return (
            <div>
                {this.state.justDeleted &&
                    <Redirect to={'/expenses/deleted'} />
                }
                {this.state.justEdited &&
                    <Redirect to={'/expenses/edited'} />
                }
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
        console.log(date);
        // e.preventDefault();
        this.setState({
            expenseDate: date
        });
    }
    amountChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
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
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }
    haveReceiptChange(e) {
        console.log(e.target.value);
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    editExpenseSubmit(e) {
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
    deleteExpense(id) {
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