import React, {PropTypes} from 'react';
import {EVENTS_PROP_TYPE} from './constants';
import {getDisplayHour} from '../utils';
import TimeSlotEvent from './TimeSlotEvent.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import handleSelectEvent from '../actions/index';

import './TimeSlot.css';

class TimeSlot extends React.PureComponent {
  static propTypes = {
    hour: PropTypes.number.isRequired,
    events: EVENTS_PROP_TYPE.isRequired,
    onSelectEvent: PropTypes.func.isRequired,
  }

  _renderEvents =() => {
    let {events, onSelectEvent} = this.props;
    // let events = this.props.events;
    // let onSelectEvent = this.props.handleSelectEvent;

    return events.map((event) => (
      <div key={event.id} className="time-slot__event">
        <TimeSlotEvent event={event} onSelect={onSelectEvent.bind(null, event.id)} />
      </div>
    ));
  }

  render() {
    let {hour} = this.props;
    let displayHour = getDisplayHour(hour);

    return (
      <section className="time-slot">
        <span className="time-slot__hour-label">
            {displayHour}
        </span>
        <div className="time-slot__events">
            {this._renderEvents()}
        </div>
      </section>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    day: state.day
  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({handleSelectEvent: handleSelectEvent}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TimeSlot);
