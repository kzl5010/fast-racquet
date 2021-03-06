import ordersReducer from '../reducers/orders_reducer';

let initialState = {};

describe('Orders Reducer', ()=> {
   it('doesn\'t do anything for unrelated actions', () => {
     let finalState = ordersReducer(initialState, { type: "COOLIO"});
     expect(finalState).toEqual(initialState);
   });

   it('updates the store on an action', () => {
     let order = { id: 5, tv_show: "blainer" };
     expect(ordersReducer(initialState, { type: "RECEIVE_ORDER", order})).toEqual({5: order})
   });

  it('updated state matches snapshot', () => {
    let order = { id: 5, tv_show: "blainer" };
    console.log(ordersReducer(initialState, { type: "RECEIVE_ORDER", order}));
    expect(ordersReducer(initialState, { type: "RECEIVE_ORDER", order})).toMatchSnapshot()
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
