import raf from './tempPolyfills'
import Enzyme, { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.spy = spy;

// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};
