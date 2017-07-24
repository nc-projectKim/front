import React, { Component } from 'react';
import ExpensesPageExpensesList from './ExpensesPageExpensesList';
// import EditExpense from './EditExpense';
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
                {/* { this.state.edit*/}
                {/* ? <EditExpense id={this.state.noteId} editNote={this.editNote} note={this.props.notes[this.state.noteId]}/>*/}
                <ExpensesPageExpensesList
                    heading={'Latest Expenses'}
                    expenses={this.props.expenses}
                    viewMore={this.viewMore}
                    /* editNote={this.editNote}*/
                    /* submitNote={this.submitNote}*/
                    newSubmit={this.state.newSubmit}
                />
                {/* }*/}
            </div>
        );
    }
    // editNote (id) {
    //     this.setState({
    //         edit: !this.state.edit,
    //         noteId: id
    //     });
//     // }
// }

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