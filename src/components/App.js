import React, {PureComponent} from 'react';
import {Route} from 'react-router-dom';
import Page from './Page';

export default class App extends PureComponent {
    render() {
        return (<Route path="/" component={Page} />);
    }
}