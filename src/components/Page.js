import React, {PureComponent} from 'react';
import Calendar from './Calendar';
import EventDetailOverlay from './EventDetailOverlay';
import {filterEventsByDay, getEventFromEvents, getDisplayDate} from '../utils';
import {MILLISECONDS_DAY} from '../utils/constants';
import DATA_SET from '../utils/data';

import './Page.css';

const DayNavigator = ({dateDisplay, onPrev, onNext}) => {
    return (
        <nav className="page__nav">
            <button
                className="page__nav-button page__prev-day"
                title="Go to previous day"
                onClick={onPrev}
            />
            <h2 className="page__date">{dateDisplay}</h2>
            <button
                className="page__nav-button page__next-day"
                title="Go to next day"
                onClick={onNext}
            />
        </nav>
    );
};

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

    _handlePrev() {
        this.setState(({day}) => ({
            day: day - MILLISECONDS_DAY
        }));
    }

    _handleNext() {
        this.setState(({day}) => ({
            day: day + MILLISECONDS_DAY
        }));
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
                <DayNavigator
                    dateDisplay={getDisplayDate(day)}
                    onPrev={this._handlePrev.bind(this)}
                    onNext={this._handleNext.bind(this)}
                />
                <Calendar events={events} onSelectEvent={this._handleSelectEvent.bind(this)} />
                {eventDetailOverlay}
            </div>
        );
    }
}
