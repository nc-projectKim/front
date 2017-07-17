import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import moment from 'moment';

const dateFormat = 'D MMM YYYY';
const timeFormat = 'HH:mm';

class NoteCard extends Component {
    render () {
        return (
            <div className="container">
                <div className="col-xs-2"><div>{moment(this.props.note.created).format(dateFormat)}</div>
                <div>{moment(this.props.note.created).format(timeFormat)}</div>
                </div>
                <div className="col-xs-6"><div><strong>{this.props.note.title.substring(0, 30)}</strong></div>
                <div>{`${this.props.note.text.substring(0, 100)}`}</div>
                </div>
                <div className="col-xs-2">{this.props.note.tags.map((tag, i) => {
                    return (
                        <span key={`${tag}${i}`}>
                            {`#${tag}  `}
                        </span>
                    );
                    })}</div>
                <div className="col-xs-1"><Link to={'#'}><button>View</button></Link></div>
                <div className="col-xs-1"><Link to={'#'}><button>Edit</button></Link></div>
            </div>
        );
    }
}
export default NoteCard;

NoteCard.propTypes = {
    note: PropTypes.object.isRequired
};