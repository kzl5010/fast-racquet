import React from 'react';
import { configure, shallow } from 'enzyme';
import { PageHeader } from 'react-bootstrap';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';
import Greeting from '../components/home_page/greeting.jsx';

describe('Welcome (Greeting)', ()=> {
   it('Should match the snapshot', () => {
       const component = shallow(<Greeting />);
       // const json = component.toJSON();
       // console.log(component.props().debug());
       expect(component).toMatchSnapshot();
   });

   it('should greet Users to the site and mention money', () => {
       expect(shallow(<Greeting />).contains(<PageHeader className="text-center">Quality string jobs to your door for $40.</PageHeader>)).toBe(true);
   });

    it('should properly receive and display props', () => {

        const currentUser = { first_name: "Hero Protagonist" };
        const component1 = shallow(<Greeting currentUser={currentUser} />);
        // console.log(component1.instance().props);
        // console.log(currentUser === component1.instance().props.currentUser);
        expect(component1.instance().props.currentUser).toBeDefined();
        expect(component1.instance().props.currentUser).toEqual(currentUser);
    });
});
