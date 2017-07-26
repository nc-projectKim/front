import React from 'react';
import PropTypes from 'prop-types';
import './css/EditNote.css';
import deleteExpense from '../utilities/deleteExpense.utilities';
import editExpense from '../utilities/editExpense.utilities';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';


class EditExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.expenses.date,
            currency: this.props.expenses.currency,
            amount: this.props.expenses.amount,
            chargeTo: this.props.expenses.chargeTo,
            description: this.props.expenses.description,
            haveReceipt: this.props.expenses.haveReceipt,
            justDeleted: false,
            justEdited: false
        };
        this.titleChange = this.titleChange.bind(this);
        this.textChange = this.textChange.bind(this);
        this.editNoteSubmit = this.editNoteSubmit.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    render() {
        return (
            <div>
                {this.state.justDeleted &&
                    <Redirect to={'/expenses/deleted'} />
                }
                {this.state.justEdited &&
                    <Redirect to={'/expenses/edited'} />
                }
                <form onSubmit={this.editExpenseSubmit}>
                    <div>
                        <label htmlFor="date">Date</label>
                        <br />
                        <input className="titleInput" type="text" onClick={this.dateChange} name="date" placeholder="11/07/98" />
                    </div>
                    <div>
                        <label htmlFor="currency">Currency</label>
                        <br />
                        <input className="titleInput" type="text" onClick={this.currencyChange} name="currency" placeholder="GBP" />
                    </div>
                    <div>
                        <label htmlFor="expenseAmount">Amount</label>
                        <br />
                        <span>£</span>
                        <span><input className="expenseInput" name="expenseAmount" onClick={this.amountChange} type="text" placeholder="5.99" /></span>
                    </div>
                    <div>
                        <label htmlFor="chargeTo">Charge To</label>
                        <br />
                        <input className="titleInput" type="text" onClick={this.changeToChange} name="chargeTo" placeholder="Client Name" />
                    </div>
                    <div>
                        <label htmlFor="expenseDescription">Expense Description</label>
                        <br />
                        <textarea className="expenseInput" name="expenseDescription" onClick={this.descriptionChange} type="text" placeholder="expense description..." />
                    </div>
                    <div>
                        <label htmlFor="Tags">Have Receipt?</label>
                        <br />
                        <select>
                            <optgroup label="Do you have a receipt?">
                                <option value="no">no</option>
                                <option value="yes">Yes</option>
                            </optgroup>
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-success" type="submit">Save Changes</button>
                        <button className="btn btn-warning" onClick={this.props.editExpense} type="button">Cancel</button>
                        <button className="btn btn-danger" onClick={this.deleteExpense.bind(null, this.props.ExpenseId)} type="button">Delete</button>
                    </div>
                </form>
            </div>
        );
    }
    dateChange(e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    currencyChange(e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    amountChange(e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    changeToChange(e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    descriptionChange(e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
    haveReceiptChange(e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }

    editExpenseSubmit(e) {
        e.preventDefault();
        const editedNote = {
            date: e.target[0].value,
            currency: e.target[1].value,
            amount: e.target[2].value,
            changeTo: e.target[3].value,
            description: e.target[4].value,
            haveReceipt: e.target[5].value,            
            expenseId: this.props.expenseId
        };
        editExpense(editedNote)
            .then(() => {
                this.setState({
                    justEdited: true
                }).bind(this);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    deleteExpense(id) {
        // e.preventDefault();
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

export default EditNote;

EditNote.propTypes = {
    note: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};