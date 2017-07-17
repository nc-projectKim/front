import React, { Component } from 'react';

class NoteCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-xs-2"><div>17 July 2017</div>
                <div>9:00 am</div>
                </div>
                <div className="col-xs-6"><div><strong>Title</strong></div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, quisquam doloremque recusandae autem voluptates, pariatur expedita tenetur, quae magni minus quod. Quis pariatur dignissimos nulla delectus aliquam, iste a labore?</div>
                </div>
                <div className="col-xs-2">Tags</div>
                <div className="col-xs-1"><button>View</button></div>
                <div className="col-xs-1"><button>Edit</button></div>
            </div>
        );
    }
}
export default NoteCard;