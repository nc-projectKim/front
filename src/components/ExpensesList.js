import React, { Component } from 'react';
import ExpensesRowTitle from './ExpensesRowTitle';
import ExpenseCard from './ExpenseCard';
// import ExpensesPanelButtons from './ExpensesPanelButtons';
// import ExpensesPanelButtonsMinimised from './ExpensesPanelButtonsMinimised';
import { map } from 'underscore';
import PropTypes from 'prop-types';
import './css/ExpensesList.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import alterValues from './component-utilities/alterValues';

class ExpensesList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newSubmit: false,
            view: false
        };
        this.viewMore = this.viewMore.bind(this);
    }
    render () {
        const editNote = this.props.editNote;
        const notesAltered = alterValues (this.props.notes).slice(0, 10);
        return (
            <div>
                {this.state.view
                    ?
                    <div className='panel panel-default'>
                        <div className="panel-heading">
                            <span>
                                <h3 className="panel-title"><span>{this.props.heading}</span></h3>
                                <Link to="/notes/search" ><button type="button"
                                    className="btn btn-info srch-btn">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                                </Link>
                            </span>
                        </div>

                        <div className="panel-body">
                            <div className="container">
                                <ExpensesRowTitle />
                                {map(notesAltered, function (note) {
                                    return (
                                        <ExpenseCard iD={note[0]} key={note.created} note={note[1]} editNote={editNote} />
                                    );
                                })}
                                <ExpensesPanelButtons
                                    viewMore={this.viewMore} />
                            </div>
                        </div>
                    </div>
                    : <div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Latest Notes</h3>
                                <ExpensesPanelButtonsMinimised
                                    viewMore={this.viewMore} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
    viewMore () {
        this.setState({
            view: !this.state.view
        });
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addNote: (note) => {
//             dispatch(actions.)
//         }
//     }
// }

export default ExpensesList;

ExpensesList.propTypes = {
    // view: PropTypes.bool.isRequired,
    notes: PropTypes.object,
    // viewMore: PropTypes.func.isRequired,
    editNote: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired
};

 