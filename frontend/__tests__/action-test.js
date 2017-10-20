// import { }

const mapStateToProps = ({ session }) => ({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
});

describe('MapStateToProps', () => {

});