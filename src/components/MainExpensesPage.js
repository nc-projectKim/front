import React, { Component } from 'react';
import MainExpensesList from './MainExpensesList';
// import EditNote from './EditNote';
import PropTypes from 'prop-types';
// import * as actions from '../actions/actions';
// import { connect } from 'react-redux';

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

class MainExpensesPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            view: true,
            edit: false,
            noteId: '',
            notes: null
        };
        this.viewMore = this.viewMore.bind(this);
        // this.editNote = this.editNote.bind(this);
    }
    // componentDidMount () {
    //     // this.props.getNotes();
    //     this.setState({
    //         view: true,
    //         add: false,
    //         expenses: expenses
    //     });
    // }
    render () {
        return (
            <div>
                {/*{this.state.edit
                    ? <EditNote id={this.state.noteId} editNote={this.editNote} note={this.props.notes[this.state.noteId]} />*/}
                     <MainExpensesList
                        heading={'My Expenses'}
                        expenses={expenses}
                        viewMore={this.viewMore}
                        /*editNote={this.editNote}*/
                    />
                {/*}*/}

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
    viewMore () {
        this.setState({
            view: !this.state.view
        });
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         getNotes: () => {
//             dispatch(actions.getNotes());
//         }
//     };
// }

// function mapStateToProps(state) {
//     return {
//         notes: state.data
//     };
// }

MainExpensesPage.propTypes = {
    expenses: PropTypes.any.isRequired,
    getNotes: PropTypes.func.isRequired
};
// export default connect(mapStateToProps, mapDispatchToProps)(MainExpensesPage);
export default MainExpensesPage;