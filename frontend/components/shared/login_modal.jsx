import React from 'react';
import { Modal, Button, Tooltip } from 'react-bootstrap';

class LoginModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: "", password: "", first_name: "", last_name: "", showModal: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

	update(field) {
		return e => this.setState({
			[field]: e.target.value
		});
	}

  render() {
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
      <span className="login-form-container">
      <Button
        bsStyle="link"
        bsSize="medium"
        onClick={this.open}
      > Login
      </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <Modal.Header closeButton>
        <img src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1495010116/Logomakr_0lSyvU_j6ldwz.png" alt="logo" className="logo-img"/>
        </Modal.Header>
        <Modal.Body>
        <h1 className="welcome-screen-text">	Get your racquet fast  </h1>
          <div className="login-form">
          <p>
          Please Login
          </p>

            {this.renderErrors()}
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input" placeholder="Email"/>
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" placeholder="Password"/>
            <br/>
            <input type="submit" value="Sign In" />
          </div>
          </Modal.Body>
        </form>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default LoginModal;
