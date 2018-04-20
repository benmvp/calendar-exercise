import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import {shallow} from 'enzyme';

describe('App.js', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders correctly', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });

});

