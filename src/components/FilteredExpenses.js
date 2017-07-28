import React, { Component } from 'react';
// import EditNote from './EditNote';
import FilteredExpensesList from './FilteredExpensesList';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';
import EditExpense from './EditExpense';

class FilteredExpenses extends Component {
    constructor (props) {
        super(props);
        this.state = {
            edit: false,
            expenseId: '',
            filteredExpenses: null
        };
        this.editExpense = this.editExpense.bind(this);
    }
    componentDidMount () {
            this.setState({
                expenses: this.props.filteredExpenses
            });
    }
    render () {
        return (
            <div className="FilteredExpenses-main">
                 {this.state.edit 
                    ? <EditExpense editExpense={this.editExpense} note={this.props.filteredExpense[this.state.expenseId]} />
                    : <FilteredExpensesList
                        filteredExpenses={this.props.filteredExpenses}
                        viewMore={this.viewMore}
                        editExpense={this.editExpense}
                    />
                 }
            </div>
        );
    }
    editExpense (id) {
        console.log('clicked');
        this.setState({
            edit: !this.state.edit,
            expenseId: id
        });
    }
}

function mapStateToProps (state) {
    return {
        filteredExpenses: state.filteredExpenses
    };
}

FilteredExpenses.propTypes = {
    // filteredNotes: PropTypes.any.isRequired,
    // getFilteredNotes: PropTypes.func.isRequired
};

// export default FilteredExpenses;
export default connect(mapStateToProps)(FilteredExpenses);