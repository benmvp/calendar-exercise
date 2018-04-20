import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {EVENT_PROP_TYPE} from './constants';

import './TimeSlotEvent.css';

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

        // TODO: Need a way to determine that the event is in the past so that it
        // can be displayed faded-out

        let isFaded = new Date(start) < new Date() ? 0.50 : 'false';

        return (
            <button className={`time-slot-event time-slot-event--${color}`} opacity={isFaded} onClick={onSelect}>
                {title}
            </button>
        );
    }
}
