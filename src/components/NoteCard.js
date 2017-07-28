import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';
import './css/NoteCard.css';

const dateFormat = 'D MMM YYYY';
const timeFormat = 'HH:mm';

function formatNote (text) {
    if (text.length < 100) return text;
    return `${text.substring(0, 100)}...`;
}

class NoteCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            displayAll: false
        };
        this.displayNote = this.displayNote.bind(this);
    }
    render () {
        return (
            <div>
                <div className="container-fluid component-NoteCard">
                    <div className="row">
                    <div className="col-xs-2"><div>{moment(this.props.note.created).format(dateFormat)}</div>
                        <div>{moment(this.props.note.created).format(timeFormat)}</div>
                    </div>
                    <div className="col-xs-6 left-align"><div><strong>{
                        this.props.note.title
                        ? this.props.note.title.substring(0, 30)
                        : null
                        }</strong></div>
                        {this.state.displayAll
                            ? <div>{this.props.note.text}</div>
                            : <div className="text-body">{formatNote(this.props.note.text)}</div>
                        }
                    </div>
                    <div className="col-xs-2">
                        {this.props.note.tags
                        ?
                        this.props.note.tags.map((tag, i) => {
                            return (
                                  <div key={`${tag}${i}`}>
                                  { tag.length > 0 &&
                                <span className="tag">
                                      {`#${tag}  `}
                                </span>
                                  }
                                  </div>
                            );
                        })
                        : null
                        }
                    </div>
                    {this.state.displayAll
                        ? <div className="col-xs-1 left-align"><button className="btn notes-buttons" onClick={this.displayNote}>Collapse</button></div>
                        : <div className="col-xs-1 left-align"><button className="btn notes-buttons" onClick={this.displayNote}>View</button></div>

                    }
                    <div className="col-xs-1 left-align"><button type="submit" className="btn notes-buttons" value={this.props.iD} onClick={this.props.editNote.bind(this, this.props.iD)}>Edit</button></div>
                </div>
                <div className="divider">
                </div>
                </div>
            </div>
        );
    }
    displayNote () {
        this.setState({
            displayAll: !this.state.displayAll
        });
    }
}
export default NoteCard;

NoteCard.propTypes = {
    note: PropTypes.object.isRequired,
    iD: PropTypes.string.isRequired,
    editNote: PropTypes.func.isRequired
};