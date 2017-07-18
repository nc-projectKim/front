import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';

const dateFormat = 'D MMM YYYY';
const timeFormat = 'HH:mm';

function formatNote(text) {
    if (text.length < 100) return text;
    return `${text.substring(0, 100)}...`;
}

class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAll: false
        };
        this.displayNote = this.displayNote.bind(this);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-xs-2"><div>{moment(this.props.note.created).format(dateFormat)}</div>
                        <div>{moment(this.props.note.created).format(timeFormat)}</div>
                    </div>
                    <div className="col-xs-6"><div><strong>{this.props.note.title.substring(0, 30)}</strong></div>
                        { this.state.displayAll 
                            ? <div>{this.props.note.text}</div>
                            : <div>{formatNote(this.props.note.text)}</div>
                        
                        }
                    </div>
                    <div className="col-xs-2">{this.props.note.tags.map((tag, i) => {
                        return (
                            <span key={`${tag}${i}`}>
                                {`#${tag}  `}
                            </span>
                        );
                    })}</div>
                    <div className="col-xs-1"><button onClick={this.displayNote}>View</button></div>
                    <div className="col-xs-1"><Link to={'#'}><button>Edit</button></Link></div>
                </div>
            </div>
        );
    }
    displayNote() {
        this.setState({
            displayAll: !this.state.displayAll
        });
    }
}
export default NoteCard;

NoteCard.propTypes = {
    note: PropTypes.object.isRequired
};