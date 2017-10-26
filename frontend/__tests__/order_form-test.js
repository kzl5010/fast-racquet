
let initialState = {};

import { mapStateToProps } from '../components/order/order_form_container';

describe('Order Container MapStateToProps', ()=> {
   it('doesn\'t do anything for unrelated actions', () => {

   });

   console.log(mapStateToProps);

   it('updates the store on an action', () => {
     let order = { id: 5, tv_show: "blainer" };
     expect(mapStateToProps(initialState)).toEqual({});
   });


  //  it('should greet Users to the site and mention money', () => {
  //      expect(shallow(<Greeting />).contains(<PageHeader className="text-center">Quality string jobs to your door for $40.</PageHeader>)).toBe(true);
  //  });
   //
  //   it('should properly receive and display props', () => {
   //
  //       const currentUser = { first_name: "Hero Protagonist" };
  //       const component1 = shallow(<Greeting currentUser={currentUser} />);
  //       expect(component1.instance().props.currentUser).toBeDefined();
  //       expect(component1.instance().props.currentUser).toEqual(currentUser);
  //   });
});
