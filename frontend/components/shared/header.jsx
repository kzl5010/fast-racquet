import React from 'react';
import { Link, withRouter } from 'react-router';
import LoginModalContainer from './login_modal_container';
import SignupModalContainer from './signup_modal_container';

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
    if (this.props.currentUser) {
      Nav = (
        <div className="header-list">
          <button className="header-button"><Link to="/">Home</Link>
          </button>
          <button className="header-button"><Link to="/refer">Refer a friend</Link>
          </button>
          <button className="header-button"><Link to="/about">About</Link>
          </button>

          <button className="header-button" onClick={this.handleClick}>Log Out</button>
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
            <p className="header-banner"> Get 50% off your first string job when you
            <SignupModalContainer />
            </p>
          </div>
          <button className="header-button"><Link to="/">Home</Link>
          </button>
          <button className="header-button"><Link to="/refer">Refer a friend</Link>
          </button>
          <button className="header-button"><Link to="/about">About</Link>
          </button>
          <LoginModalContainer />
          {
          //<SignupModalContainer />
          }
          <button className="header-button" onClick={this.loginGuest}>Guest</button>

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
