import React, { Component } from 'react';
import ExpensesList from './ExpensesList';
// import EditExpense from './EditExpenses';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import _ from 'underscore';

class LatestExpenses extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            expenseId: '',
            expenses: null
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
                {/*{ this.state.edit
                ? <EditNote editNote={this.editNote} note={this.props.notes[this.state.noteId]}/>
                : <NotesList*/}
                <ExpensesList
                    heading={'Latest Expenses'}
                    view={this.state.view}
                    expenses={this.props.expenses}
                    /*editNote={this.editNote}*/
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