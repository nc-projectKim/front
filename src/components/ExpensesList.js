import React, { Component } from 'react';
import ExpensesRowTitle from './ExpensesRowTitle';
import ExpenseCard from './ExpenseCard';
import ExpensesPanelButtons from './ExpensesPanelButtons';
import ExpensesPanelButtonsMinimised from './ExpensesPanelButtonsMinimised';
import { map, each } from 'underscore';
import PropTypes from 'prop-types';
import './css/ExpensesList.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import alterValues from './component-utilities/alterValues';

import { CSVLink, CSVDownload } from 'react-csv';


const expenses = {
    'expense0': {
        'created': 1494073883000,
        'expenseDate': 1486800461000,
        'amount': 26.1,
        'currency': 'GBP',
        'description': 'Molestiae consequatur non ut et.',
        'haveReceipt': true,
        'chargeTo': 'Swaniawski, Pfeffer and Wehner',
        'lastEditTime': 1494073883000
    },
    'expense1': {
        'created': 1487241650000,
        'expenseDate': 1484663489000,
        'amount': 20.3,
        'currency': 'GBP',
        'description': 'Suscipit alias similique alias ut tenetur dolores fuga.',
        'haveReceipt': true,
        'chargeTo': 'Gorczany and Sons',
        'lastEditTime': 1487241650000
    },
    'expense2': {
        'created': 1494494018000,
        'expenseDate': 1492437315000,
        'amount': 33.34,
        'currency': 'GBP',
        'description': 'Dolore aspernatur et totam quaerat voluptatem culpa aut sint quod.',
        'haveReceipt': true,
        'chargeTo': 'Swift - Erdman',
        'lastEditTime': 1498680060000
    },
    'expense3': {
        'created': 1494510765000,
        'expenseDate': 1484328325000,
        'amount': 42.44,
        'currency': 'GBP',
        'description': 'Saepe dolores delectus dicta numquam dolores voluptatem eum animi.',
        'haveReceipt': false,
        'chargeTo': 'Wehner, Bartoletti and Wiegand',
        'lastEditTime': 1494510765000
    }
};
const headers = ['expenseId', 'created', 'expenseDate', 'amount', 'currency', 'description', 'haveReceipt', 'chargeTo','lastEditTime'];

const data = map(expenses, (x, key) => {
    const newArr = [];
    newArr.push(key);
    each(x, (y) => {
        console.log(y);
        newArr.push(y);
    });
    return newArr;
});

const jsonExp = JSON.stringify(expenses, null, "\t");

console.log(data);

class ExpensesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSubmit: false,
            view: false
        };
        this.viewMore = this.viewMore.bind(this);
        // this.convertToCSV = this.convertToCSV.bind(this);

    }
    render() {
        console.log(expenses);
        const editNote = this.props.editNote;
        // const notesAltered = alterValues (this.props.notes).slice(0, 10);
        return (
            <div>
                <button>
                <CSVLink data={data} header={headers}> Download CSV</CSVLink>
                </button>
                {this.state.view
                    ?
                    <div className='panel panel-default'>
                        <div className="panel-heading">
                            <span>
                                <h3 className="panel-title"><span>Latest Expenses</span></h3>
                                <Link to="/notes/search" ><button type="button"
                                    className="btn btn-info srch-btn">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                                </Link>
                            </span>
                        </div>

                        <div className="panel-body">
                            <div className="container">
                                <ExpensesRowTitle />
                                {map(expenses, function (expense, key) {
                                    return (
                                        <ExpenseCard iD={key} key={expense.created} expense={expense} editNote={editNote} />
                                    );
                                })}
                                <ExpensesPanelButtons
                                    viewMore={this.viewMore}
                                />
                            </div>
                        </div>
                    </div>
                    : <div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Latest Expenses</h3>
                                <ExpensesPanelButtonsMinimised
                                    viewMore={this.viewMore}
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
    viewMore() {
        this.setState({
            view: !this.state.view
        });
    }

    /*convertToCSV() {
        let obj = expenses;
        console.log(obj);
        const jsonObj = JSON.stringify(obj);
        const csv = this.convertToCSV(jsonObj);
        const exportedFile = 'ExpensesCSV' + '.csv' || 'export.csv';
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, exportedFile);
        }
        else {
            const link = document.createElement('a');
            if (link.download !== undefined) {
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', exportedFile);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }*/
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addNote: (note) => {
//             dispatch(actions.)
//         }
//     }
// }

export default ExpensesList;

ExpensesList.propTypes = {
    // view: PropTypes.bool.isRequired,
    notes: PropTypes.object,
    // viewMore: PropTypes.func.isRequired,
    editNote: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired
};

