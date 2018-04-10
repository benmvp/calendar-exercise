import React, {PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getEventFromEvents} from '../utils';


import './TimeSlotEvent.css';

class TimeSlotEvent extends React.PureComponent {
  static propTypes = {
    event: EVENT_PROP_TYPE.isRequired,
    // onSelect: PropTypes.func.isRequired,
  }

  render() {
    let {
      event: {title, color},
      onSelect,
    } = this.props;

    // TODO: Need a way to determine that the event is in the past so that it
      // convert current time date.now to hour of the day
      //  for every child div before that hour - fade
    // can be displayed faded-out

    return (
      <button className={`time-slot-event time-slot-event--${color}`} onClick={this.props.onSelect}>
          {title}
      </button>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    selectedEventId: state.selectedEventId
  }
}


export default connect(mapStateToProps)(TimeSlotEvent);


