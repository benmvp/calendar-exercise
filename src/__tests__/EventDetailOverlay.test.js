import React from 'react';
import { expect } from 'chai';
import EventDetailOverlay from '../components/EventDetailOverlay';
import TimeSlotEvent from '../components/TimeSlotEvent';

describe('<EventDetailOverlay />', () => {
    spy(EventDetailOverlay.prototype, 'componentDidMount');

    const minProps = {
        event: {},
        onClose: function(){},
        onSelect: function(){}
    }

    const event = {
      color: 'canary',
      description: 'Nulla tempus.',
      hours: 1,
      id: 42,
      start: 1524243600000,
      title: 'De-engineered disintermediate functionalities',
    };

    it('renders without crashing', () => {
        const wrapper = shallow(<EventDetailOverlay {...minProps} event={event} />);

        expect(wrapper.length).to.equal(1);
    });

    it('calls componentDidMount once', () => {
        const timeSlotEvent = shallow(<TimeSlotEvent {...minProps} event={event} />);

        timeSlotEvent.find('button').simulate('click');
        expect(EventDetailOverlay.prototype.componentDidMount.calledOnce).to.equal(true);
    });


});
