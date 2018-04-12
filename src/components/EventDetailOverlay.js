import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectEvent} from '../actions';
import {getDisplayDate, getDisplayHour, getEventFromEvents} from '../utils';
import {EVENTS_PROP_TYPE} from './constants';

import './EventDetailOverlay.css';

class EventDetailOverlay extends PureComponent {
    static propTypes = {
        events: EVENTS_PROP_TYPE.isRequired,
        selectedEventId: PropTypes.number.isRequired,
        _handleClose: PropTypes.func.isRequired,
    }

    _handleEsc = (e) => {
      if (e.keyCode === 27) {
        this.props._handleClose();
      }
    }
    
    componentDidMount () {
      document.addEventListener('keydown', this._handleEsc);
      document.getElementById('calendar').addEventListener('click', this.props._handleClose);
      document.body.style.overflow = "hidden";
    }
    
    componentWillUnmount () {
      document.removeEventListener("keydown", this.onEsc);
      document.getElementById('calendar').removeEventListener('click', this.props.onClose);
      document.body.style.overflow = "auto";
    }
    
    render() {
        let {events, selectedEventId, _handleClose} = this.props;
        let event = getEventFromEvents(events, selectedEventId);
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
                        onClick={_handleClose}
                    />
                    <div>
                        {displayDateTime}
                        <span
                            className={
                                `event-detail-overlay__color 
                                event-detail-overlay__${color}`
                            }
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

const mapStateToProps = (state) => ({
    events: state.home.events,
    selectedEventId: state.home.selectedEventId,
})

const mapDispatchToProps = (dispatch) => ({
    _handleClose: () => {
        dispatch(selectEvent(null));
    },
})

EventDetailOverlay = connect(mapStateToProps, mapDispatchToProps)(EventDetailOverlay);

export default EventDetailOverlay;