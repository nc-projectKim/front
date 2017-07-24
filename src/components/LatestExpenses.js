import React, { Component } from 'react';
import ExpensesList from './ExpensesList';
// import EditExpense from './EditExpenses';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import _ from 'underscore';

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
	},
	'expense4': {
		'created': 1489153024000,
		'expenseDate': 1494870720000,
		'amount': 35.49,
		'currency': 'GBP',
		'description': 'Est ut dolore corrupti tenetur aut repudiandae fugit officia.',
		'haveReceipt': true,
		'chargeTo': 'Pouros and Sons',
		'lastEditTime': 1489153024000
	}
};

class LatestExpenses extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            expenseId: '',
            expenses: null
        };
        // this.editExpense = this.editExpense.bind(this);
    }
    // componentDidMount () {
    //     this.props.getNotes();
    //     this.setState({
    //         notes: this.props.notes
    //     });
    // }
    render () {
        return (
            <div>
                {/* { this.state.edit
                ? <EditNote editNote={this.editNote} note={this.props.notes[this.state.noteId]}/>
                : <NotesList*/}
                <ExpensesList
                    heading={'Latest Expenses'}
                    view={this.state.view}
                    expenses={this.props.expenses}
                    /* editNote={this.editNote}*/
                />
            </div>
        );
    }
    // editNote (id) {
    //     this.setState({
    //         edit: !this.state.edit,
    //         noteId: id
    //     });
    // }
}

// function mapDispatchToProps (dispatch) {
//     return {
//         getNotes: () => {
//             dispatch(actions.getNotes());
//         }
//     };
// }

// function mapStateToProps (state) {
//     return {
//         notes: state.data,
//     };
// }


// LatestExpenses.propTypes = {
//     notes: PropTypes.any,
//     getNotes: PropTypes.func.isRequired
// };

export default LatestExpenses;
// export default connect(mapStateToProps, mapDispatchToProps)(LatestExpenses);