import React, { Component } from 'react';
// import EditNote from './EditNote';
import FilteredExpensesList from './FilteredExpensesList';
import PropTypes from 'prop-types';
// import * as actions from '../actions/actions';
// import {connect} from 'react-redux';

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

class FilteredExpenses extends Component {
    constructor (props) {
        super(props);
        this.state = {
            edit: false,
            noteId: '',
            filteredExpenses: null
        };
        // this.editExpense = this.editExpense.bind(this);
    }
    componentDidMount () {
            this.setState({
                expenses: expenses
            });
    }
    render () {
        return (
            <div className="FilteredExpenses-main">
                {/*{this.state.edit 
                    ? <EditExpense editNote={this.editNote} note={this.props.filteredNotes[this.state.noteId]} />*/}
                     <FilteredExpensesList
                        filteredExpenses={expenses}
                        /*addNewExpense={this.addNewExpense}*/
                        viewMore={this.viewMore}
                        /*editExpense={this.editExpense}*/
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

// function mapStateToProps (state) {
//     return {
//         filteredNotes: state.filteredData
//     };
// }

FilteredExpenses.propTypes = {
    // filteredNotes: PropTypes.any.isRequired,
    // getFilteredNotes: PropTypes.func.isRequired
};

export default FilteredExpenses;
// export default connect(mapStateToProps)(FilteredExpenses);