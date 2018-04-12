import {PropTypes} from 'react';

export const EVENT_PROP_TYPE = PropTypes.shape({
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['sky', 'rose', 'canary', 'shamrock']).isRequired,
});
export const EVENTS_PROP_TYPE = PropTypes.arrayOf(EVENT_PROP_TYPE);
