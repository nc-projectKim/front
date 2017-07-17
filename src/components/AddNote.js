import React from 'react';
// import {Field, reduxForm } from 'redux-form';

const AddNote = (props) => {
    return (
        <form onSubmit="handleSubmit">
            <div>
                <label htmlFor="Title">Title</label>
                {/*<div>
                    <Field
                        name="Title"
                        component="input"
                        type="text"
                        placeholder="title"
                    />
                </div>*/}
            </div>
             <div>
                <label htmlFor="Text">My Note</label>
                {/*<div>
                    <Field
                        name="Text"
                        component="textarea"
                        type="text"
                        placeholder="write your note here..."
                    />
                </div>*/}
            </div>
             <div>
                <label htmlFor="Tags">#tag</label>
                {/*<div>
                    <Field
                        name="Tags"
                        component="input"
                        type="text"
                        placeholder="#"
                    />
                </div>*/}
            </div>
            <div>
                <button type="submit">Submit</button>
                <button type="button">Cancel</button>
            </div>
        </form>
    );
}

export default AddNote;
// reduxForm({
//     form : 'addNote'
// })();