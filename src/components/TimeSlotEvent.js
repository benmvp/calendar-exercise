import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import { selectEvent } from '../actions';
import {EVENT_PROP_TYPE} from './constants';

import './TimeSlotEvent.css';

const className = require('classnames');

class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    render() {
        let {
            event: {title, color, start, id},
            dispatch,
        } = this.props;

        return (
            <button 
                className={className(
                  'time-slot-event',
                  `time-slot-event--${color}`,
                  start < new Date() && 'time-slot-event-past'
                )} 
                onClick={() => dispatch(selectEvent(id))}
            >
                {title}
            </button>
        );
    }
}

TimeSlotEvent = connect()(TimeSlotEvent);

export default TimeSlotEvent; 