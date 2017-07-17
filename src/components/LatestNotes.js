import React, { Component } from 'react';
import RowTitle from './RowTitle';
import NoteCard from './NoteCard';
import PanelButtons from './PanelButtons';
import PanelButtonsMinimised from './PanelButtonsMinimised';
import { map } from 'underscore';

const notes = {
        '-KpG7jiyD6sVSRLV5eaC': {
            'created': 1500304832915,
            'lastEditTime': 1500304832915,
            'tags': ['code', 'firebase'],
            'text': 'Hello firebase user',
            'title': 'War And Peace'
        },
        '-KpG89jvcYEOHUaM4Fpe': {
            'created': 1500304943481,
            'lastEditTime': 1500304943481,
            'tags': ['code', 'firebase'],
            'text': 'Hello again firebase user',
            'title': 'War And Peace'
        }
};

class LatestNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false,
        };
        this.viewMore = this.viewMore.bind(this);
    }
    render() {
        return (
            <div>
                {this.state.view
                    ? <div>
                        <div className='panel panel-default'>
                            <div className="panel-heading">
                                <h3 className="panel-title">Latest Notes</h3>
                            </div>
                            <div className="panel-body">
                                <div className="container">
                                    <RowTitle />
                                    {map(notes, function (note) {
                                        console.log(note);
                                        return (
                                            <NoteCard key={note.created} note={note}/>
                                        );
                                    })}
                                    <PanelButtons viewMore={this.viewMore} />
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Latest Notes</h3>
                                <PanelButtonsMinimised viewMore={this.viewMore} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
    viewMore() {
        this.setState({
            view: !this.state.view
        });
    }
}
export default LatestNotes;