import React from 'react';
import { Link, withRouter } from 'react-router';
import LoginModalContainer from './login_modal_container';
import SignupModalContainer from './signup_modal_container';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Grid, Row } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();

  }

  loginGuest(e) {
    e.preventDefault();
    const guest = { user: {email: "fakeaccount@gmail.com", password :"password"}}
    this.props.login(guest);
  }

  render() {
    let Nav;
    let deal = null;

    if (this.props.currentUser) {
      if (this.props.currentUser.first_buy) {
        deal = (<Col lg={12} md={12} className="signup-promo text-center">Your 50% off will be applied at checkout</Col>);
      }
      Nav = (
        <div className="header-list">
          {deal}
          <Row>
          <Col lg={12} md={12} sm={12}>
          <Button bsStyle="link" className="header-button"><Link to="/">Home</Link>
          </Button>
          <Button bsStyle="link" className="header-button"><Link to="/refer">Refer a friend</Link>
          </Button>
          <Button bsStyle="link" className="header-button"><Link to="/about">About</Link>
          </Button>
          <Button bsStyle="link" className="header-button pull-right" onClick={this.handleClick}>Log Out</Button>
          </Col>
          </Row>
        {//    <button className="header-button" onClick={logout}>Log Out</button>
//        <li className="header-list-item"><Link to="/taskers">Taskers</Link></li>
        }

        </div>
      );
    }
    else {
      Nav = (
        <div className="header-list">
          <div className="signup-deal">
            <Row className="text-center signup-promo"> Get 50% off your first string job when you&nbsp;
            <SignupModalContainer />
            </Row>
          </div>
          <Row>
          <Col lg={12} md={12} sm={12}>
          <Button bsStyle="link" className="header-button"><Link to="/">Home</Link>
          </Button>
          <Button bsStyle="link" className="header-button"><Link to="/refer">Refer a friend</Link>
          </Button>
          <Button bsStyle="link" className="header-button"><Link to="/about">About</Link>
          </Button>
          <LoginModalContainer />
          </Col>
          </Row>
          {
          //<SignupModalContainer />
          }
          {//            <button className="header-button" onClick={this.loginGuest}>Guest</button>
          }
        </div>
      );
    }

    return (
      <header className="header">
        <nav className="header-nav">
          <section className="header-logo">
{/*
              <Link to="/">
              <h3 className="logo-h3">Home</h3>
            </Link>
            */ }
          {Nav}
          </section>
        </nav>
      </header>
    );
  }
}

export default Header;
