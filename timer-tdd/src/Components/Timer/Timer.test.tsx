import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('Timer', () => {
    it('should Render the Timer Component Div', () => {
        let component = shallow(<Timer />)
        expect(component.find('div').length).toBeGreaterThanOrEqual(1);
    })
})