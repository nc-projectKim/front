import React, { Component } from 'react';
import MainExpensesList from './MainExpensesList';
// import EditNote from './EditNote';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { CSVLink, CSVDownload } from 'react-csv';
import { map, each } from 'underscore';

class MainExpensesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            expenseId: '',
            notes: null
        };
        this.viewMore = this.viewMore.bind(this);
        // this.editExpense = this.editExpense.bind(this);
    }
<<<<<<< HEAD
    componentDidMount () {
=======
    componentDidMount() {
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
        this.props.getExpenses();
        this.setState({
            view: true,
            add: false,
            expenses: this.props.expenses
        });
    }
<<<<<<< HEAD
    render () {
=======
    render() {
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
        return (
            <div>
                <MainExpensesList
                    heading={'My Expenses'}
                    expenses={this.props.expenses}
                    viewMore={this.viewMore}
                    editExpense={this.editExpense}
                />

            </div>
        );
    }
<<<<<<< HEAD
    viewMore () {
=======
    viewMore() {
>>>>>>> 1a2e3071f7659ca583a4e4dfe5ae4dcfb8083756
        this.setState({
            view: !this.state.view
        });
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getExpenses: () => {
            dispatch(actions.getExpenses());
        }
    };
}

function mapStateToProps (state) {
    return {
        expenses: state.expenses
    };
}

MainExpensesPage.propTypes = {
    expenses: PropTypes.any.isRequired
    // getNotes: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(MainExpensesPage);
// export default MainExpensesPage;