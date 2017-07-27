import React from 'react';
import PropTypes from 'prop-types';
import './css/EditNote.css';
import deleteNote from '../utilities/deleteNote.utilities';
import editNote from '../utilities/editNote.utilities';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';


class EditNote extends React.Component {
    constructor(props) {
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
    render() {
        return (
            <div>
                {this.state.justDeleted &&
                    <Redirect to={'/notes/deleted'} />
                }
                {this.state.justEdited &&
                    <Redirect to={'/notes/edited'} />
                }
                <div className='panel panel-default'>
                    <div className="panel-heading">
                        <h3 className="panel-title">Edit Note</h3>
                    </div>
                    <div className="panel-body">
                        <div className="container">
                            <form onSubmit={this.editNoteSubmit}>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="title2"><h4>Title</h4></label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" id="title2" onChange={this.titleChange} defaultValue={this.props.note.title} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="note2"><h4>My Note</h4></label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control noteDescription" id="note2" type="text" onChange={this.textChange} defaultValue={this.props.note.text} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {this.state.tags.map((tag, i) => {
                                        return (<div key={i}>
                                            {
                                                tag.length > 0 &&
                                                <span>
                                                    {tag}
                                                    <i onClick={this.removeTag.bind(this, tag)} className="fa fa-times-circle-o" ></i>
                                                </span>
                                            }
                                        </div>
                                        );
                                    })}
                                    <label className="col-sm-2 col-form-label" htmlFor="Tags2"><h4>Tag</h4></label>
                                    <div className="col-sm-8">
                                        <input className="form-control" id="Tags2" type="text" placeholder="#" />
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <div className="inline-bt">
                                        <button className="btn btn-success" type="submit">Save Changes</button>
                                    </div>
                                    <div className="inline-bt">
                                        <button className="btn btn-warning" onClick={this.props.editNote} type="button">Cancel</button>
                                    </div>
                                    <div className="inline-bt">
                                        <button className="btn btn-danger" onClick={this.deleteNote.bind(null, this.props.id)} type="button">Delete</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    titleChange(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }
    textChange(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }
    removeTag(tag) {
        const newTags = [...this.state.tags];
        const i = findIndex(newTags, tag);
        newTags.splice(i, 1);
        this.setState({
            tags: newTags
        });
    }
    editNoteSubmit(e) {
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
    deleteNote(id) {
        // e.preventDefault();
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

function findIndex(tags, name) {
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
    // handleSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};