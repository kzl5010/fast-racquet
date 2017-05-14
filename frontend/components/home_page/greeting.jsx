import React from 'react';
import { Link, withRouter } from 'react-router';
import { login } from '../../actions/session_actions';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props.currentUser);
    console.log(this.props);
    // this.state = {
    //   user: this.props.currentUser
    // }
    this.user = this.props.currentUser;
    this.loginGuest = this.loginGuest.bind(this);
  }

  // componentWillReceiveProps(nextProps, nextState) {
  //   // debugger;
  //   // console.log(nextProps);
  //   // console.log(nextProps);
  //   // console.log(this.state.user);
  //   if (!this.state.user) {
  //     console.log("ayy11");
  //     this.setState( {user: nextProps.user} )
  //     console.log(this.state.user);
  //     return true;
  //   }
  //   // if (this.state.user && nextProps.user !== this.state.user) {
  //   //   console.log(nextProps);
  //   //   console.log(nextState);
  //   //   console.log("ayy");
  //   //   this.setState( {user: null} )
  //   //   console.log(this.state.user);
  //   //   return true;
  //   // }
  //   return true;
  // }

  loginGuest(e) {
    e.preventDefault();
    const guest = {email: "fakeaccount@gmail.com", password :"password"}
    this.props.login({user: guest});
    // this.props.login({guest});
    // this.props.login(guest);
    // this.setState({user: guest});
    // debugger;
    console.log({guest});
  }

  render() {
    const styles = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      fade: true
    };

    const sessionLinks = (
      <nav className="login-signup">
      <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup" activeClassName="current">Sign up!</Link>
      </nav>
    );

    if (this.props.currentUser) {
      const personalGreeting = (
        <section className="greeting">
        <hgroup className="greeting-group">
        <div className="first-line-greeting">
        <h2 className="greeting-name">Welcome to Fast Racquet, {this.props.currentUser.first_name}!</h2>
        </div>
{//        <Link to="/task_request" activeClassName="make_tr">Request a Task!</Link>
}

        </hgroup>
        <div className="welcome-instructions">
        {//<h3> What do you need help with? </h3> TODO add searchbar here
        }
        { //Add a task_requests index here
        }
        <h3>How to get Started</h3>
        <p className="num-icon-content">Taskers love helping</p>
        <ul>
        <li>
        <div className='number-icon'>1</div>
        <div className='content'>
        <h3 className="header-i">Pick a Task</h3>
        <p className="num-icon-content">Choose a task from a list of available jobs</p>
        </div>
        </li>
        <li>
        <div className='number-icon'>2</div>
        <div className='content'>
        <h3 className="header-i">Pick a Tasker</h3>
        <p className="num-icon-content">Select a Tasker that suits your unique needs</p>
        </div>
        </li>
        <li>
        <div className='number-icon'>3</div>
        <div className='content'>
        <h3 className="header-i">Get it Done</h3>
        <p className="num-icon-content">Your Tasker puts in the work and ideally gets paid™</p>
        </div>
        </li>
        </ul>
        </div>

        </section>
      );
      return personalGreeting;
    }


    const unloggedGreeting = (

    <div className="splash-div">
      <div className="background-img">
      <div className="splash-welcome-container">
        <div className="carousel-text">
          <h1>Get strung <br/> On your schedule</h1>
          <button className="guest-login" onClick={this.loginGuest}>{"Explore as Guest"}</button>
          {sessionLinks}
        </div>
      </div>
    </div>
    </div>

    );
    // if (this.user) {
    //   return personalGreeting;
    // }

    return unloggedGreeting;
  }
}

//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : unloggedGreeting() //sessionLinks()
// );


export default Greeting;