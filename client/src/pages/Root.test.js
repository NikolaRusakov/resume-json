import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Root from './Root';

describe('Root', () => {
    const div = shallow(<Root/>);

    it('renders the title', () => {
        expect(div.find('Layout').exists()).toBe(true);
    });
    it('renders component', () => {
        ReactDOM.render(<Root/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

});