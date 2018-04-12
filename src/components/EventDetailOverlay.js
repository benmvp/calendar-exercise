import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import {EVENT_PROP_TYPE} from './constants';
import {selectEvent} from '../actions';
import {getDisplayDate, getDisplayHour} from '../utils';

import './EventDetailOverlay.css';

class EventDetailOverlay extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onClose: PropTypes.func.isRequired,
    }

    onEsc (e) {
        if (e.keyCode === 27) {
            this.props.onClose();
        }
    }

    componentDidMount () {
        this.onEsc = this.onEsc.bind(this);
        document.addEventListener('keydown', this.onEsc);
        document.getElementById('root').addEventListener('click', this.props.onClose);
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount () {
        document.removeEventListener("keydown", this.onEsc);
        document.getElementById('root').removeEventListener('click', this.props.onClose);
        document.body.style.overflow = "auto";
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

        // TODO: Add appropriate ARIA tags to overlay/dialog
        return (
            <section className="event-detail-overlay">
                <div className="event-detail-overlay__container">
                    <button
                        className="event-detail-overlay__close"
                        title="Close detail view"
                        onClick={onClose}
                    />
                    <div>
                        {displayDateTime}
                        <span
                            className={`event-detail-overlay__color event-detail-overlay__${color}`}
                            title={`Event label color: ${color}`}
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

const mapDispatchToProps = (dispatch) => ({
    onClose: () => {
        dispatch(selectEvent(null));
    },
})

EventDetailOverlay = connect(undefined, mapDispatchToProps)(EventDetailOverlay);

export default EventDetailOverlay;