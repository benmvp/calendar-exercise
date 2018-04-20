import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import EventDetailOverlay from '../components/EventDetailOverlay';

spy(EventDetailOverlay.prototype, 'componentDidMount');

describe('<EventDetailOverlay />', () => {
  it('calls componentDidMount once', () => {
    const selectedEvent = {
      color: 'canary',
      description: 'Nulla tempus.',
      hours: 1,
      id: 42,
      start: 1524243600000,
      title: 'De-engineered disintermediate functionalities'
    }

    const wrapper = mount(<EventDetailOverlay event={selectedEvent}/>);

    expect(EventDetailOverlay.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
