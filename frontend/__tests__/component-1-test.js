import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';
import Greeting from '../components/home_page/greeting.jsx';

describe('Welcome (Greeting)', ()=> {
   it('Welcomes users to the site', () => {
       const component = shallow(<Greeting />);
       // const json = component.toJSON();
       expect(component).toMatchSnapshot();
   });
});