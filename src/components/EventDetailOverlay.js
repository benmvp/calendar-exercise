import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {getDisplayDate, getDisplayHour} from '../utils';

import './EventDetailOverlay.css';

export default class EventDetailOverlay extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onClose: PropTypes.func.isRequired
    }


    render() {
        let {event, onClose} = this.props;
        let {title, description, start, color, hours} = event;
        let displayDate = getDisplayDate(start);
        let startHour = (new Date(start)).getHours();

        // TODO: Fix. If hours was other than 1 the UI would break
        let endHour = startHour + hours;

        let startHourDisplay = getDisplayHour(startHour);
        let endHourDisplay = getDisplayHour(endHour);


        let displayDateTime = `${displayDate} ${startHourDisplay} - ${endHourDisplay}`;



        return (
            <section className="event-detail-overlay">
                <div className="event-detail-overlay__container">
                    <button
                        className="event-detail-overlay__close"
                        title="Close detail view"
                        onClick={onClose}
                        onKeyPress={(e: KeyboardEvent<HTMLDivElement>) => console.log(e.key)}
                    />
                    <div>
                        {displayDateTime}
                        <span
                            className={`event-detail-overlay__color square--${color}`}
                            title={`Event label color: ${color}`}
// tried adding hexcode values to constants, but cannot render in JSX. Leaving for later (or, is this possible?)
// renders string of color, but not attempt at adding hexcode
                            // style={{ backgroundColor: `${color}` }}
                        />
                    </div>
                    <h1 className="event-detail-overlay__title">
                        {title}
                    </h1>
                    <p>{description}</p>
                </div>
            </section>
        );
    }
}
