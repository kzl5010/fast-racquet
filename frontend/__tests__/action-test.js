// import { }

const mapStateToProps = ({ session }) => {
  if (session) return {
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
}
return {};
}

describe('MapStateToProps', () => {
  it('Maps State to Props', ()=> {
    let initialState = { session: {
      currentUser: true,
      errors: ['bananas']
    }}
    expect(mapStateToProps(initialState)).toEqual({
      loggedIn: true,
      errors: ['bananas']
    })
  })

  it('It doesn\'t map unwanted props', () => {
    let initialState = {
      oop: 'baboop',
      bimibap: 'bowl',
    }
    expect(mapStateToProps(initialState)).toEqual({})
  })

});
