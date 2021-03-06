import React from 'react';
import PropTypes from 'prop-types';
import './css/EditNote.css';
import deleteNote from '../utilities/deleteNote.utilities';
import editNote from '../utilities/editNote.utilities';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';


class EditNote extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: this.props.note.title,
            text: this.props.note.text,
            tags: this.props.note.tags,
            justDeleted: false,
            justEdited: false
        };
        this.titleChange = this.titleChange.bind(this);
        this.textChange = this.textChange.bind(this);
        this.editNoteSubmit = this.editNoteSubmit.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    render () {
        return (
            <div>
                {this.state.justDeleted &&
                    <Redirect to={'/notes/deleted'}/>
                }
                {this.state.justEdited &&
                    <Redirect to={'/notes/edited'}/>
                }
                <div className='panel panel-default'>
                    <div className="notes">
                        <h3 className="panel-title">Edit Note</h3>
                    </div>
                    <div className="panel-body">
                        <div className="container">
                            <form onSubmit={this.editNoteSubmit}>
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
                                    <label htmlFor="Tags">#tags</label>
                                    <br />
                                    <div className="tag-group">
                                        {this.state.tags &&
                                        this.state.tags.map((tag, i) => {
                                            return (<div key={i}>
                                                {tag.length > 0 && 
                                                    <span className="tag">
                                                        {tag }
                                                        <i onClick={this.removeTag.bind(this, tag)} className="fa fa-times-circle-o" ></i>
                                                    </span>
                                        }
                                            </div>
                                            );
                                        })
                                        }
                                    </div>
                                    <input name="Tags" type="text" placeholder="#" />
                                </div>
                                <div>
                                    <button className="btn btn-default notes-buttons" type="submit">Save Changes</button>
                                    <button className="btn btn-default notes-buttons" onClick={this.props.editNote} type="button">Cancel</button>
                                    <button className="btn btn-default notes-buttons" onClick={this.deleteNote.bind(null, this.props.id)} type="button">Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    titleChange (e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }
    textChange (e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }
    removeTag (tag) {
        const newTags = [...this.state.tags];
        const i = findIndex(newTags, tag);
        newTags.splice(i, 1);
        this.setState({
            tags: newTags
        });
    }
    editNoteSubmit (e) {
        e.preventDefault();
        const newTags = e.target[2].value.split(',').concat(this.state.tags);
        const editedNote = {
            title: e.target[0].value,
            text: e.target[1].value,
            tags: newTags,
            noteId: this.props.id
        };
        editNote(editedNote)
        .then(() => {
            console.log('noteEdited');
            return (
            this.setState({
                justEdited: !this.state.justEdited
            })
            );
        })
        .catch((err) => {
            console.log(err);
        });
    }
    deleteNote (id) {
        deleteNote(id)
            .then(() => {
                console.log('deleted');
                this.setState({
                    justDeleted: true
                });

            })
            .catch((err) => {
                console.log(err);
            });
    }
}

function findIndex (tags, name) {
    for (let i = 0; i < tags.length; i++) {
        if (tags[i] === name) {
            return i;
        }
    }
}

export default EditNote;

EditNote.propTypes = {
    note: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};