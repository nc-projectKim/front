import React from 'react';
// import {Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const EditNote = (props) => {
    console.log(props.note);
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="Title">Title</label>
                <br />
                {/* <div>
                    <Field
                        name="Title"
                        component="input"
                        type="text"
                        placeholder="title"
                    />
                </div>*/}
                <input type="text" name="Title" placeholder="title"/>
            </div>
             <div>
                <label htmlFor="note">My Note</label>
                <br />
                {/* <div>
                    <Field
                        name="Text"
                        component="textarea"
                        type="text"
                        placeholder="write your note here..."
                    />
                </div>*/}
                <textarea name="note" type="text" placeholder="write your note here..." />
            </div>
             <div>
                <label htmlFor="Tags">#tag</label>
                <br />
                {/* <div>
                    <Field
                        name="Tags"
                        component="input"
                        type="text"
                        placeholder="#"
                    />
                </div>*/}
                <input name="Tags" type="text" placeholder="#"/>
            </div>
            <div>
                <button type="submit">Save Changes</button>
                <button type="button">Cancel</button>
            </div>
        </form>
    );
};


export default EditNote;
// reduxForm({
//     form : 'addNote'
// })();

EditNote.propTypes = {
    // editNote: PropTypes.func.isRequired,
    // handleSubmit: PropTypes.func.isRequired
};