import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import Calendar from './Calendar';
import DayNavigator from './DayNavigator';
import EventDetailOverlay from './EventDetailOverlay';
import {getEvents, updateDate} from '../actions';
import {filterEventsByDay} from '../utils';
import NewEvent from './NewEvent';
import DATA_SET from '../utils/data';
import {EVENTS_PROP_TYPE} from './constants';

import './Page.css';

const moment = require('moment');

class Page extends PureComponent {
    static propTypes = {
        events: EVENTS_PROP_TYPE.isRequired,
        day: PropTypes.string.isRequired,
        getEvents: PropTypes.func.isRequired,
        getDay: PropTypes.func.isRequired,

        selectedEventId: PropTypes.number,
    }

    componentWillMount () {
        this.props.getEvents(DATA_SET);
        this.props.getDay(moment().toString());
    }

    render() {
        let {events, day, selectedEventId} = this.props;
        let filteredEvents = filterEventsByDay(events, day);
        let eventDetailOverlay;

        if (selectedEventId) {
            eventDetailOverlay = <EventDetailOverlay />
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
    events: state.home.events,
    day: state.home.date,
    selectedEventId: state.home.selectedEventId,
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