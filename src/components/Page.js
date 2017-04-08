import React, {PureComponent} from 'react';
import Calendar from './Calendar';
import {filterEventsByDay} from '../utils';
import DATA_SET from '../utils/data';

import './Page.css';

export default class Page extends PureComponent {
    state = {
        day: Date.now()
    }

    render() {
        let {day} = this.state;
        let events = filterEventsByDay(DATA_SET, day);

        return (
            <div className="page">
                <header className="page__header">
                    <h1 className="page__title">Daily Agenda</h1>
                </header>
                <Calendar events={events} />
            </div>
        );
    }
}
