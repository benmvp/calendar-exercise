import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../components/App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('renders 1 <App /> component', () => {
    const component = shallow(<App />);

    expect(component).toHaveLength(1);
});
