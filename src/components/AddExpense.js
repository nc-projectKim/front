import React from 'react';
// import PropTypes from 'prop-types';
// import './css/AddExpense.css';
import { BrowserRouter as Redirect, Link } from 'react-router-dom';
import addExpense from '../utilities/addExpense.utilities';

class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newSubmit: false
        };
        this.submitExpense = this.submitExpense.bind(this);
    }
    render() {
        return (
            <div>
                {
                    this.state.newSubmit &&
                    <div>
                        <div>Expense submitted!</div>
                        <Redirect to="/expenses" />
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
                                    <label htmlFor="expense">Date</label>
                                    <br />
                                    <input className="expenseInput" name="expense" type="text" placeholder="11/04/1996" />
                                </div>
                                <div>
                                    <label htmlFor="expense">Amount</label>
                                    <br />
                                    <input className="expenseInput" name="expense" type="text" placeholder="£5.99" />
                                </div>
                                <div>
                                    <label htmlFor="Title">Title</label>
                                    <br />
                                    <input className="titleInput" type="text" name="Title" placeholder="title" />
                                </div>
                                <div>
                                    <label htmlFor="expense">My Expense</label>
                                    <br />
                                    <textarea className="expenseInput" name="expense" type="text" placeholder="write your expense here..." />
                                </div>
                                <div>
                                    <label htmlFor="Tags">Have Receipt?</label>
                                    <br />
                                    <input name="Tags" type="text" placeholder="true/false" />
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
    submitExpense(e) {
        e.preventDefault();
        const newExpenseObj = {
            date: e.target[0].value,
            amount: e.target[1].value,
            title: e.target[2].value,
            myExpense: e.target[3].value,
            haveReceipt: e.target[4].value
        };
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