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
            noteId: '',
            notes: null
        };
        this.viewMore = this.viewMore.bind(this);
    }
    componentDidMount() {
        this.props.getExpenses();
        this.setState({
            view: true,
            add: false,
            expenses: this.props.expenses
        });
    }
    render() {
        return (
            <div>
                {/* {this.state.edit
                    ? <EditNote id={this.state.noteId} editNote={this.editNote} note={this.props.notes[this.state.noteId]} />*/}
                <MainExpensesList
                    heading={'My Expenses'}
                    expenses={this.props.expenses}
                    viewMore={this.viewMore}
                /* editNote={this.editNote}*/
                />
                {/* }*/}

            </div>
        );
    }
    // editNote (id) {
    //     console.log('id', id);
    //     this.setState({
    //         edit: !this.state.edit,
    //         noteId: id
    //     });
    // }
    viewMore() {
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
    // expenses: PropTypes.any.isRequired,
    // getNotes: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(MainExpensesPage);
// export default MainExpensesPage;