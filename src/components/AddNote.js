import React from 'react';
// import PropTypes from 'prop-types';
import './css/AddNote.css';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import addNote from '../utilities/addNote.utilities';


class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newSubmit: false,
            newTitle: '',
            touchedTitle: false
        };
        this.submitNote = this.submitNote.bind(this);
    }
    render() {
        return (
            <div>
                {
                    this.state.newSubmit &&
                    <Redirect to={'/notes'} />
                }
                <div className='panel panel-default'>
                    <div className="panel-heading">
                        <h3 className="panel-title">New Note</h3>
                    </div>
                    <div className="panel-body">
                        <div className="container">
                            <form onSubmit={this.submitNote} method="post">
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="title1"><h4>Title</h4></label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" id="title1" placeholder="Title" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="note"><h4>My Note</h4></label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control noteDescription" id="note" type="text" placeholder="write your note here..." />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="Tags"><h4>Tag</h4></label>
                                    <div className="col-sm-8">
                                    <input className="form-control" id="Tags" type="text" placeholder="#" />
                                    </div>
                                </div>
                                <div className="inline-bt">
                                    <button className="btn btn-success btn-lg" type="submit">Submit</button>
                                </div>
                                <div className="inline-bt">
                                    <Link to='/notes'><button className="btn btn-danger btn-lg" type="button">Cancel</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    submitNote(e) {
        e.preventDefault();
        const newNoteObj = {
            title: e.target[0].value,
            text: e.target[1].value,
            tags: e.target[2].value.split(',')
        };
        addNote(newNoteObj)
            .then(() => {
                console.log('note added');
                return (
                    this.setState({
                        newSubmit: !this.state.newSubmit,
                    })
                );
            })
            .catch(err => {
                console.log(err);
            });
    }
}


export default AddNote;

AddNote.propTypes = {
    // addNewNote: PropTypes.func.isRequired,
    // submitNote: PropTypes.func.isRequired
};