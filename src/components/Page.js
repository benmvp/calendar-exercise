import React, {PureComponent} from 'react';
import Calendar from './Calendar';
import EventDetailOverlay from './EventDetailOverlay';
import {filterEventsByDay, getEventFromEvents} from '../utils';
import DATA_SET from '../utils/data';

import './Page.css';

export default class Page extends PureComponent {
    state = {
        day: Date.now(),
        selectedEventId: undefined
    }

    _handleSelectEvent(eventId) {
        this.setState({selectedEventId: eventId});
    }

    _handleEventDetailOverlayClose() {
        this.setState({selectedEventId: undefined});
    }

    render() {
        let {day, selectedEventId} = this.state;
        let events = filterEventsByDay(DATA_SET, day);
        let selectedEvent = getEventFromEvents(DATA_SET, selectedEventId);
        let eventDetailOverlay;

        if (selectedEvent) {
            eventDetailOverlay = (
                <EventDetailOverlay
                    event={selectedEvent}
                    onClose={this._handleEventDetailOverlayClose.bind(this)}
                />
            );
        }

        return (
            <div className="page">
                <header className="page__header">
                    <h1 className="page__title">Daily Agenda</h1>
                </header>
                <Calendar events={events} onSelectEvent={this._handleSelectEvent.bind(this)} />
                {eventDetailOverlay}
            </div>
        );
    }
}
