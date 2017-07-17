import React, { Component } from 'react';
import RowTitle from './RowTitle';
import NoteCard from './NoteCard';

class LatestNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true,

        };
    }
    render() {
        return (
            <div>
                {this.state.view
                    ? <div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Latest Notes</h3>
                            </div>
                            <div className="panel-body">
                                <div className="container">
                                    <RowTitle />
                                    <NoteCard/>
                                    <NoteCard/>
                                    <NoteCard/>
                                    <NoteCard/>
                                    <NoteCard/>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        );
    }
}
export default LatestNotes;