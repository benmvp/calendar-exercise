import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';

import './TimeSlotEvent.css';

const className = require('classnames');


export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired,
    }

    render() {
        let {
            event: {title, color, start},
            onSelect,
        } = this.props;

        return (
            <button 
                className={className(
                  'time-slot-event',
                  `time-slot-event--${color}`,
                  start < new Date() && 'time-slot-event-past'
                )} 
                onClick={onSelect}
            >
                {title}
            </button>
        );
    }
}
