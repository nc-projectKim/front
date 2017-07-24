import React, {component} from 'react';
import {CSV, CSVDownload} from 'react-csv';

export const CSVButton = () => {
    return (
        <button className="btn btn-info" type="button" onClick={this.props.csv}>CSV</button>
    );
}