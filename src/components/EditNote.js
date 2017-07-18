import React from 'react';
// import {Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './css/EditNote.css';


class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.note.title,
            text: this.props.note.text,
            tags: this.props.note.tags
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
                    <input className="titleInput" type="text" name="Title" onChange={this.titleChange} defaultValue={this.props.note.title} />
                </div>
                <div>
                    <label htmlFor="note">My Note</label>
                    <br />
                    <textarea className="noteInput" name="note" type="text" onChange={this.textChange} defaultValue={this.props.note.text} />
                </div>
                <div>
                    <label htmlFor="Tags">#tag</label>
                    <br />
                    {this.state.tags.map((tag, i) => {
                        return (<div key={i}>
                            <span>
                                {tag}
                            </span>
                            <span>
                                <i className="fa fa-times-circle-o"></i>
                            </span>
                        </div>
                        )
                    })}
                    <input name="Tags" type="text" placeholder="#" />
                </div>
                <div>
                    <button className="btn btn-success" type="submit">Save Changes</button>
                    <button className="btn btn-warning" onClick={this.props.editNote} type="button">Cancel</button>
                    <button className="btn btn-danger" type="button">Delete</button>
                    
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
    // removeTag (e) {
    //     const newTags = [...this.state.tags];
    //     const i = findIndex(newTags, e);
    //     console.log(newTags, e, i);
    //     console.log(this.state.tags);
    //     this.setState({
    //         tags: newTags.splice(i, 1)
    //     });
    // }
}

// function findIndex(tags, name) {
//     for (let i = 0; i < tags.length; i++) {
//         if (tags[i] === name) {
//             return i;
//         }
//     }
// }


export default EditNote;
// reduxForm({
//     form : 'addNote'
// })();

EditNote.propTypes = {
    note: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired
    // handleSubmit: PropTypes.func.isRequired
};