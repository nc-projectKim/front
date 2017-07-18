import React from 'react';
// import {Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.note.title,
            text: this.props.note.text
        };
        this.titleChange = this.titleChange.bind(this);
        this.textChange = this.textChange.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label htmlFor="Title">Title</label>
                    <br />
                    <input type="text" name="Title" onChange={this.titleChange} defaultValue={this.props.note.title} />
                </div>
                <div>
                    <label htmlFor="note">My Note</label>
                    <br />
                    <textarea name="note" type="text" onChange={this.textChange} defaultValue={this.props.note.text} />
                </div>
                <div>
                    <label htmlFor="Tags">#tag</label>
                    <br />
                    <input name="Tags" type="text" placeholder="#" />
                </div>
                <div>
                    <button type="submit">Save Changes</button>
                    <button onClick={this.props.editNote} type="button">Cancel</button>
                </div>
            </form>
        );
    }
    titleChange (e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
   textChange (e) {
        e.preventDefault();
        this.setState = {
            title: e.target.value
        };
    }
}


export default EditNote;
// reduxForm({
//     form : 'addNote'
// })();

EditNote.propTypes = {
    note: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired
    // handleSubmit: PropTypes.func.isRequired
};