import React from 'react';
import { Link, withRouter } from 'react-router';
import { login } from '../../actions/session_actions';
import { Modal, Button, Grid, Tooltip, Col, FormGroup, FormControl, Clearfix, Row,
          InputGroup, ButtonGroup, Jumbotron, PageHeader, Image } from 'react-bootstrap';
import HeaderContainer from '../shared/header_container';

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
        <div className="greeting">
        <Jumbotron className="jumbo-greeting">
        <HeaderContainer />
        <Image src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1495010116/Logomakr_0lSyvU_j6ldwz.png"
        alt="logo" className="logo-img center-block"/>
          <PageHeader className="text-center">Quality string jobs to your door for $40 {this.props.currentUser.first_name}!</PageHeader>
          <div className="text-center">
          <Button className="order-button"><Link to="/order">Get your racquet strung</Link></Button>
          </div>
          </Jumbotron>
          <Grid>
          <Col className="text-center">
          <PageHeader className="welcome-instructions"><small>How it works</small></PageHeader>
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
      );
      return personalGreeting;
    }


    const unloggedGreeting = (

    <div className="splash-div">
    { //Make this jumbotron, possibly move Nav links here for backgroundn img
    }
        <Jumbotron className="jumbo-greeting">
        <HeaderContainer />
        <Image src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1495010116/Logomakr_0lSyvU_j6ldwz.png"
        alt="logo" className="logo-img center-block"/>
          <PageHeader className="text-center">Quality string jobs to your door for $40.</PageHeader>
          <div className="text-center">
          <Button className="order-button"><Link to="/order">Get your racquet strung</Link></Button>
          </div>
          </Jumbotron>
          <Grid>
          <Col className="text-center">
          <PageHeader className="welcome-instructions"><small>How it works</small></PageHeader>
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
