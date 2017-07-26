import React, { Component } from 'react';
import ExpensesPageExpensesList from './ExpensesPageExpensesList';
import EditExpense from './EditExpense';
import PropTypes from 'prop-types';
// import * as actions from '../actions/actions';
// import { connect } from 'react-redux';
// import addNote from '../utilities/addNote.utilities';

class MainExpensesList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            expenseId: '',
            expenses: null,
            newSubmit: false
        };
        this.editExpense = this.editExpense.bind(this);
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
                 { this.state.edit
                 ? 
                 <div>
                {console.log(this.props.expenses[this.state.expenseId])}
                 <EditExpense 
                 id={this.state.expenseId} 
                 editExpense={this.editExpense} 
                 expense={this.props.expenses[this.state.expenseId]}/>
                 </div>
                : <ExpensesPageExpensesList
                    heading={'Latest Expenses'}
                    expenses={this.props.expenses}
                    viewMore={this.viewMore}
                    editExpense={this.editExpense}
                    /* submitNote={this.submitNote}*/
                    newSubmit={this.state.newSubmit}
                />
                 }
            </div>
        );
    }
    editExpense (id) {
        this.setState({
            edit: !this.state.edit,
            expenseId: id
        });
    // }
}

// function mapDispatchToProps (dispatch) {
//     return {
//         getNotes: () => {
//             dispatch(actions.getNotes());
//         }
//     };
// }

// function mapStateToProps(state) {
//     return {
//         notes: state.data,
//     };
}


MainExpensesList.propTypes = {
    expenses: PropTypes.object.isRequired,
    getNotes: PropTypes.func.isRequired
};
// export default connect(mapStateToProps, mapDispatchToProps)(MainExpensesList);
export default MainExpensesList;