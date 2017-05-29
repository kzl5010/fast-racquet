import React from 'react';
import { Link, withRouter } from 'react-router';
import { login } from '../../actions/session_actions';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Grid, Row } from 'react-bootstrap';


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


  loginGuest(e) {
    e.preventDefault();
    const guest = {email: "fakeaccount@gmail.com", password :"password"}
    this.props.login({user: guest});
    console.log({guest});
  }

  render() {


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
        <h3>How to get Started</h3>
        <Button className="order-button"><Link to="/order">Get your racquet Strung</Link></Button>
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
        <img src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1495010116/Logomakr_0lSyvU_j6ldwz.png" alt="logo" className="logo-img"/>
          <h1>Quality string jobs to your door for $40.</h1>
          <Button className="order-button"><Link to="/order">Get your racquet Strung</Link></Button>

          <button className="guest-login" onClick={this.loginGuest}>{"Explore as Guest"}</button>
          {//sessionLinks
          }
          <Grid>
          <Col className="text-center">
          <h2 className="welcome-instructions">How it works</h2>
          </Col>
          <Row className="show-grid">
          <Col lg={4} md={4}>
          <div className='number-icon'>1</div>
          <div className='content'>
          <h3 className="header-i">Send us your racquet</h3>
          <p className="num-icon-content">Print out the packaging slip and mail your racquet to us. We pay for shipping!</p>
          </div>
          </Col>
          <Col lg={4} md={4}>
          <div className='number-icon'>2</div>
          <div className='content'>
          <h3 className="header-i">Take a break</h3>
          <p className="num-icon-content">Sit tight while one of our industry leading technicians strings your racquet</p>
          </div>
          </Col>
          <Col lg={4} md={4}>
          <div className='number-icon'>3</div>
          <div className='content'>
          <h3 className="header-i">Thwack!</h3>
          <p className="num-icon-content">Your freshly strung racquet will arrive in a few days, ready for the court</p>
          </div>
          </Col>
          </Row>
          </Grid>
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
