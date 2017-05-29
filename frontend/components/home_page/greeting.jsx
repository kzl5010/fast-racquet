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
        <img src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1495010116/Logomakr_0lSyvU_j6ldwz.png" alt="logo" className="logo-img"/>
        <h2 className="greeting-name">Welcome to Fast Racquet, {this.props.currentUser.first_name}!</h2>
        </div>
{//        <Link to="/task_request" activeClassName="make_tr">Request a Task!</Link>
}

        </hgroup>
        <Button className="order-button"><Link to="/order">Get your racquet Strung</Link></Button>

        <Grid>
        <Col className="text-center">
        <h2 className="welcome-instructions">How it works</h2>
        </Col>
        <Row className="show-grid">
        <Col lg={4} md={4}>
        <div className="text-center">
        <i className="fa fa-truck fa-5x imgstruction" aria-hidden="true"></i>
        </div>
        <div className='content text-center'>
        <h3 className="header-i text-center">Send us your racquet</h3>
        <p className="num-icon-content">Print out the packaging slip and mail your racquet to us. We pay for shipping!</p>
        </div>
        </Col>
        <Col lg={4} md={4}>
        <div className="text-center">
        <i className="fa fa-bed fa-5x imgstruction" aria-hidden="true"></i>
        </div>
        <div className='content text-center'>
        <h3 className="header-i">Take a break</h3>
        <p className="num-icon-content">Sit tight while one of our industry leading technicians strings your racquet</p>
        </div>
        </Col>
        <Col lg={4} md={4}>
        <div className="text-center">
        <i className="fa fa-dribbble fa-5x imgstruction" aria-hidden="true"></i>
        </div>
        <div className='content text-center'>
        <h3 className="header-i">Thwack!</h3>
        <p className="num-icon-content">Your freshly strung racquet will arrive in a few days, ready for the court</p>
        </div>
        </Col>
        </Row>
        </Grid>

        </section>
      );
      return personalGreeting;
    }


    const unloggedGreeting = (

    <div className="splash-div">
    { //Make this jumbotron, possibly move Nav links here for backgroundn img
    }
      <div className="background-img">
      <div className="splash-welcome-container">
        <img src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1495010116/Logomakr_0lSyvU_j6ldwz.png" alt="logo" className="logo-img"/>
          <h1>Quality string jobs to your door for $40.</h1>
          <Button className="order-button"><Link to="/order">Get your racquet Strung</Link></Button>

          <button className="guest-login" onClick={this.loginGuest}>{"Explore as Guest"}</button>
          <Grid>
          <Col className="text-center">
          <h2 className="welcome-instructions">How it works</h2>
          </Col>
          <Row className="show-grid">
          <Col lg={4} md={4}>
          <div className="text-center">
          <i className="fa fa-truck fa-5x imgstruction" aria-hidden="true"></i>
          </div>
          <div className='content text-center'>
          <h3 className="header-i text-center">Send us your racquet</h3>
          <p className="num-icon-content">Print out the packaging slip and mail your racquet to us. We pay for shipping!</p>
          </div>
          </Col>
          <Col lg={4} md={4}>
          <div className="text-center">
          <i className="fa fa-bed fa-5x imgstruction" aria-hidden="true"></i>
          </div>
          <div className='content text-center'>
          <h3 className="header-i">Take a break</h3>
          <p className="num-icon-content">Sit tight while one of our industry leading technicians strings your racquet</p>
          </div>
          </Col>
          <Col lg={4} md={4}>
          <div className="text-center">
          <i className="fa fa-dribbble fa-5x imgstruction" aria-hidden="true"></i>
          </div>
          <div className='content text-center'>
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
