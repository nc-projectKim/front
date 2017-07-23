import React from 'react';
import PropTypes from 'prop-types';
import './css/AddNote.css';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import addNote from '../utilities/addNote.utilities';

class AddNote extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newSubmit: false
        };
        this.submitNote = this.submitNote.bind(this);
    }
    render () {
        return (
        <div>
            {
                this.state.newSubmit &&
                <div>
                    <div>Note submitted!</div>
                    <Redirect to="/notes"/>
                </div>
            }
            <div className='panel panel-default'>
                <div className="panel-heading">
                    <h3 className="panel-title">New Note</h3>
                </div>
                <div className="panel-body">
                    <div className="container">
                        <form onSubmit={this.submitNote} method="post">
                            <div>
                                <label htmlFor="Title">Title</label>
                                <br />
                                <input className="titleInput" type="text" name="Title" placeholder="title" />
                            </div>
                            <div>
                                <label htmlFor="note">My Note</label>
                                <br />
                                <textarea className="noteInput" name="note" type="text" placeholder="write your note here..." />
                            </div>
                            <div>
                                <label htmlFor="Tags">#tag</label>
                                <br />
                                <input name="Tags" type="text" placeholder="#" />
                            </div>
                            <div>
                                <button className="btn btn-success" type="submit">Submit</button>
                                <button className="btn btn-warning" type="button">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
    submitNote (e) {
        e.preventDefault();
        const newNoteObj = {
            title: e.target[0].value,
            text: e.target[1].value,
            tags: e.target[2].value.split(',')
        };
        addNote(newNoteObj)
            .then(() => {
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
    addNewNote: PropTypes.func.isRequired,
    submitNote: PropTypes.func.isRequired
};