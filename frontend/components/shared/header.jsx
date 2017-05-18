import React from 'react';
import { Link, withRouter } from 'react-router';
import LoginModalContainer from './login_modal_container';

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
        <ul className="header-list">
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

        </ul>
      );
    }else {
      Nav = (
        <ul className="header-list">
          <button className="header-button"><Link to="/">Home</Link>
          </button>
          <button className="header-button"><Link to="/refer">Refer a friend</Link>
          </button>
          <button className="header-button"><Link to="/about">About</Link>
          </button>
          <LoginModalContainer login={this.props.login} />
          <button className="header-button"><Link to="/signup">Sign Up</Link>
          </button>
          <button className="header-button" onClick={this.loginGuest}>Guest</button>

        </ul>
      );
    }

    return (
      <header className="header">
        <p className="header-banner"> Get 50% off your first string job when you &nbsp;
        <Link to="/signup">sign up</Link>
        </p>
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
