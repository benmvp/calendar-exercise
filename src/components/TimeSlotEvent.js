import React, {PureComponent} from 'react';
import {EVENT_PROP_TYPE} from './constants';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired
    }

    render() {
        let {
            event: {title, color}
        } = this.props;

        return (
            <button className={`time-slot-event time-slot-event--${color}`}>
                {title}
            </button>
        );
    }
}
