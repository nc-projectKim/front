import React from 'react';
// import {Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './css/AddNote.css';

const AddNote = (props) => {
    return (
        <div>
            <div className='panel panel-default'>
                <div className="panel-heading">
                    <h3 className="panel-title">New Note</h3>
                </div>
                <div className="panel-body">
                    <div className="container">
                        <form onSubmit={props.submitNote}>
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
                                <button className="btn btn-warning" onClick={props.addNewNote} type="button">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AddNote;
// reduxForm({
//     form : 'addNote'
// })();

AddNote.propTypes = {
    addNewNote: PropTypes.func.isRequired,
    submitNote: PropTypes.func.isRequired
};