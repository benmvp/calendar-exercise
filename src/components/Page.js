import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Calendar from './Calendar';
import DayNavigator from './DayNavigator';
import EventDetailOverlay from './EventDetailOverlay';
import {getEvents, updateDate} from '../actions';
import {filterEventsByDay, getEventFromEvents} from '../utils';
import NewEvent from './NewEvent';
import DATA_SET from '../utils/data';

import './Page.css';

const moment = require('moment');

class Page extends PureComponent {

    componentWillMount () {
        this.props.getEvents(DATA_SET);
        this.props.getDay(moment().toString());
    }

    render() {
        let {events, day, selectedEventId} = this.props;
        let filteredEvents = filterEventsByDay(events, day);
        let selectedEvent = getEventFromEvents(events, selectedEventId);
        let eventDetailOverlay;

        if (selectedEvent) {
            eventDetailOverlay = (
                <EventDetailOverlay event={selectedEvent} />
            );
        }

        return (
            <div className="page">
                <header className="page__header">
                    <h1 className="page__title">Daily Agenda</h1>
                    <NewEvent />
                </header>
                <DayNavigator />
                <Calendar events={filteredEvents} />
                {eventDetailOverlay}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    events: state.events,
    day: state.date,
    selectedEventId: state.selectedEventId,
});

const mapDispatchToProps = (dispatch) => ({
    getEvents: (events) => {dispatch(getEvents(events))},
    getDay: (date) => {dispatch(updateDate(date))},
});

Page = connect(
    mapStateToProps, 
    mapDispatchToProps,
)(Page);

export default Page; 