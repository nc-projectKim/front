import React, { Component } from 'react';
import LatestNotes from './LatestNotes';
import LatestExpenses from './LatestExpenses';
import PageTop from './PageTop';
import './css/Entries.css';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';


class Entries extends Component {
    render () {
        return (
            <div className="entries-main">
                <PageTop name={'Kim'} picture={''}/>
                <LatestExpenses />
                <LatestNotes />
            </div>
        );
    }
}

function mapStateToProps (state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Entries);

Entries.propTypes = {
    currentUser: PropTypes.object
};