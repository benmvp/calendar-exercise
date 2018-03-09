import {PropTypes} from 'react';


export const EVENT_PROP_TYPE = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    color: PropTypes.oneOf([{sky: '#d1e8f0', rose: '#fcbbd2', canary: '#fcf69a', shamrock: '#009e60'}]).isRequired
});

export const EVENTS_PROP_TYPE = PropTypes.arrayOf(EVENT_PROP_TYPE);
