import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

@connect(state => ({ time: state.info.data.time }))
export default class MiniInfoBar extends Component {
  static propTypes = {
    time: PropTypes.number.isRequired
  }

  render() {
    const { time } = this.props;
    return (
      <div className="mini-info-bar">
        The info bar was last loaded at{' '}
        <span>{time && new Date(time).toUTCString()}</span>
      </div>
    );
  }
}
