import React from 'react';
import PropTypes from 'prop-types';
import {getDisplayDate} from '../utils';
import {connect} from 'react-redux';
import {updateDate} from '../actions';
const moment = require('moment');

let DayNavigator = ({ day, getDay }) => {
    return (
        <nav className="page__nav">
            <button
                className="page__nav-button page__prev-day"
                title="Go to previous day"
                onClick={() => {
                    let yesterday = moment(day).subtract(1, 'd');
                    getDay(yesterday.toString());
                }}
            />
            <h2 className="page__date">{getDisplayDate(day)}</h2>
            <button
                className="page__nav-button page__next-day"
                title="Go to next day"
                onClick={() => {
                    let tomorrow = moment(day).add(1, 'd');
                    getDay(tomorrow.toString());
                }}
            />
        </nav>
    );
};

DayNavigator.propTypes = {
    day: PropTypes.string.isRequired,
    getDay: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    day: state.date,
});

const mapDispatchToProps = (dispatch) => ({
    getDay: (date) => {dispatch(updateDate(date))},
});

DayNavigator = connect(
    mapStateToProps, 
    mapDispatchToProps,
)(DayNavigator);

export default DayNavigator;