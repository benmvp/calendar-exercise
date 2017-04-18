import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchEvents, selectEvent, selectDay } from '../actions/index';
import {filterEventsByDay, getEventFromEvents, getDisplayDate} from '../utils';
import Calendar from '../components/Calendar';
import EventDetailOverlay from '../components/EventDetailOverlay';
import DayNavigator from '../components/DayNavigator';
import './PageContainer.css';

class PageContainer extends PureComponent {

  componentDidMount() {
    this.props.fetchEvents();
  }

  _handleSelectEvent(selectedEventId) {
    this.props.selectEvent(selectedEventId);
    document.body.classList.add('stop-scrolling');
  }

  _handleEventDetailOverlayClose() {
    this.props.selectEvent(undefined);
    document.body.classList.remove('stop-scrolling');
  }

  _handlePrev() {
    // TODO: Update this.state.day to go back 1 day so previous button works
    this.props.selectDay(this._getNextDate(this.props.page.day, -1));
  }

  _handleNext() {
    // TODO: Update this.state.day to go forward 1 day so next button works
    this.props.selectDay(this._getNextDate(this.props.page.day, 1));
  }

  _getNextDate(date, change) {
    let currentDate = new Date(date);
    return currentDate.setDate(currentDate.getDate() + change);
  }

  render() {
      let {events, day, selectedEventId} = this.props.page;
      let filteredEvents = filterEventsByDay(events, day);
      let selectedEvent = getEventFromEvents(events, selectedEventId);
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
              <Calendar events={filteredEvents} onSelectEvent={this._handleSelectEvent.bind(this)} />
              {eventDetailOverlay}
          </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents, selectEvent, selectDay }, dispatch);
}

function mapStateToProps({ page }) {
  return { page };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
