import React, { Component } from 'react';
import EditNote from './EditNote';
import FilteredExpensesList from './FilteredExpensesList';
import PropTypes from 'prop-types';
// import * as actions from '../actions/actions';
import {connect} from 'react-redux';


class FilteredExpenses extends Component {
    constructor (props) {
        super(props);
        this.state = {
            edit: false,
            noteId: '',
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
                {/*{this.state.edit 
                    ? <EditExpense editNote={this.editNote} note={this.props.filteredNotes[this.state.noteId]} />*/}
                     <FilteredExpensesList
                        filteredExpense={this.props.filteredExpenses}
                        /*addNewExpense={this.addNewExpense}*/
                        viewMore={this.viewMore}
                        /*editExpense={this.editExpense}*/
                    />
            </div>
        );
    }
    editNote (id) {
        this.setState({
            edit: !this.state.edit,
            noteId: id
        });
    }
}

function mapStateToProps (state) {
    return {
        filteredNotes: state.filteredData
    };
}

FilteredExpenses.propTypes = {
    filteredNotes: PropTypes.any.isRequired,
    getFilteredNotes: PropTypes.func.isRequired
};

// export default FilteredNotes;
export default connect(mapStateToProps)(FilteredExpenses);