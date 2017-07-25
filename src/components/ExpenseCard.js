import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';
import './css/ExpenseCard.css';

const dateFormat = 'D MMM YYYY';
const timeFormat = 'HH:mm';
import { map, each } from 'underscore';
import { CSVLink, CSVDownload } from 'react-csv';


// const expenses = {
//     'expense0': {
//         'created': 1494073883000,
//         'expenseDate': 1486800461000,
//         'amount': 26.1,
//         'currency': 'GBP',
//         'description': 'Molestiae consequatur non ut et.',
//         'haveReceipt': true,
//         'chargeTo': 'Swaniawski, Pfeffer and Wehner',
//         'lastEditTime': 1494073883000
//     },
//     'expense1': {
//         'created': 1487241650000,
//         'expenseDate': 1484663489000,
//         'amount': 20.3,
//         'currency': 'GBP',
//         'description': 'Suscipit alias similique alias ut tenetur dolores fuga.',
//         'haveReceipt': true,
//         'chargeTo': 'Gorczany and Sons',
//         'lastEditTime': 1487241650000
//     },
//     'expense2': {
//         'created': 1494494018000,
//         'expenseDate': 1492437315000,
//         'amount': 33.34,
//         'currency': 'GBP',
//         'description': 'Dolore aspernatur et totam quaerat voluptatem culpa aut sint quod.',
//         'haveReceipt': true,
//         'chargeTo': 'Swift - Erdman',
//         'lastEditTime': 1498680060000
//     },
//     'expense3': {
//         'created': 1494510765000,
//         'expenseDate': 1484328325000,
//         'amount': 42.44,
//         'currency': 'GBP',
//         'description': 'Saepe dolores delectus dicta numquam dolores voluptatem eum animi.',
//         'haveReceipt': false,
//         'chargeTo': 'Wehner, Bartoletti and Wiegand',
//         'lastEditTime': 1494510765000
//     }
// };

// const headers = ['expenseId', 'created', 'expenseDate', 'amount', 'currency', 'description', 'haveReceipt', 'chargeTo','lastEditTime'];

// const data = map(this.props.expenses, (x, key) => {
//     const newArr = [];
//     newArr.push(key);
//     each(x, (y) => {
//         console.log(y);
//         newArr.push(y);
//     });
//     return newArr;
// });

// const jsonExp = JSON.stringify(this.props.expenses, null, '\t');

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
                        <div>{moment(this.props.expense.created).format(timeFormat)}</div>
                    </div>
                    {/* Amount -2*/}
                    <div className="col-xs-2">{`£${this.props.expense.amount.toFixed(2)}`}</div>

                    {/* ChargeTo 4*/}
                    <div className="col-xs-4">
                        <div><strong>{this.props.expense.chargeTo}</strong></div>
                        {
                            this.state.displayAll
                            ? <div>{this.props.expense.description}</div>
                            : <div>{this.props.expense.description.substring(0, 50)}</div>
                        }
                        
                    </div>
                    {/* Have Receipt 2*/}
                    <div className="col-xs-2">{`${this.props.expense.haveReceipt}`}</div>
                    {this.state.displayAll
                        ? <div className="col-xs-1"><button onClick={this.displayExpenseDescription}>Collapse</button></div>
                        : <div className="col-xs-1"><button onClick={this.displayExpenseDescription}>View</button></div>

                    }
                    <div className="col-xs-1"><button type="submit" value={this.props.iD} >Edit</button></div>
                </div>
                <button>
                {/* <CSVLink data={data} header={headers}>CSV</CSVLink>*/}
                </button>
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
    iD: PropTypes.string.isRequired,
    editNote: PropTypes.func.isRequired
};