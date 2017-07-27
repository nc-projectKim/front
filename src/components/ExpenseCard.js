import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';
import './css/ExpenseCard.css';

const dateFormat = 'D MMM YYYY';
const timeFormat = 'HH:mm';
// import { map, each } from 'underscore';

class ExpenseCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            displayAll: false
        };
        this.displayExpenseDescription = this.displayExpenseDescription.bind(this);
    }
    render () {
        return (
            <div className="container-fluid component-ExpenseCard">
                <div className="row">
                    {/* Date*/}
                    <div className="col-xs-2"><div>{moment(this.props.expense.expenseDate).format(dateFormat)}</div>
                        <div>{moment(this.props.expense.expenseDate).format(timeFormat)}</div>
                    </div>
                    {/* Amount -2*/}
                    {/*<div className="col-xs-2">{`£${this.props.expense.amount.toFixed(2)}`}</div>*/}
                    <div className="col-xs-2">{`£${this.props.expense.amount}`}</div>

                    {/* ChargeTo 4*/}
                    <div className="col-xs-4 left-align">
                        <div><strong>{this.props.expense.chargeTo}</strong></div>
                        {
                            this.state.displayAll
                            ? <div>{this.props.expense.description}</div>
                            : <div>{this.props.expense.description.substring(0, 50)}</div>
                        }
                        
                    </div>
                    {/* Have Receipt 2*/}
                    <div className="col-xs-2 left-align">{`${this.props.expense.haveReceipt}`}</div>
                    {this.state.displayAll
                        ? <div className="col-xs-1"><button className="btn expenses-buttons" onClick={this.displayExpenseDescription}>Collapse</button></div>
                        : <div className="col-xs-1"><button className="btn expenses-buttons" onClick={this.displayExpenseDescription}>View</button></div>

                    }
                    {this.props.id 
                    ? <div className="col-xs-1 left-align"><button className="btn expenses-buttons" type="submit" value={this.props.iD} onClick={this.props.editExpense.bind(this, this.props.id)} >Edit</button></div>
                    : <div className="col-xs-1 left-align"><button className="btn expenses-buttons" type="submit" value={this.props.iD} >Edit</button></div>
                    }
                </div>
                <div className="divider">
                </div>
            </div>
        );
    }
    displayExpenseDescription () {
        this.setState({
            displayAll: !this.state.displayAll
        });
    }
}
export default ExpenseCard;

ExpenseCard.propTypes = {
    expense: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    editExpense: PropTypes.func.isRequired
};