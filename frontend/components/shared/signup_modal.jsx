import React from 'react';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix } from 'react-bootstrap';

class SignupModal extends React.Component {
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
    this.props.signup({user});
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
      <Button className="signup-button"
        bsStyle="link"
        bsSize="medium"
        onClick={this.open}
      >Sign up
      </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
        <form onSubmit={this.handleSubmit} className="form-horizontal">
        <Modal.Header closeButton>
        <Col md={12}>
        <img src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1495010116/Logomakr_0lSyvU_j6ldwz.png" alt="logo" className="logo-img"/>
        </Col>
        </Modal.Header>
        <Modal.Body>

        <Col sm={12} lg={12} md={12}>
        <h1 className="welcome-screen-text">	Get your racquet fast  </h1>
          <div className="login-form">
          <p>
          Please Sign Up
          </p>

            {this.renderErrors()}
            <div>
              <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>

              <FormControl type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input" placeholder="Email"/>
            </div>
            <div>
              <span className="input-group-addon"><i className="fa fa-lock fa" aria-hidden="true"></i></span>

              <FormControl type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input" placeholder="Password"/>
            </div>
            <div>
              <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
              <FormControl type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="login-input" placeholder="First Name" />
            </div>
            <div>
              <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
              <FormControl type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="login-input" placeholder="Last Name" />
            </div>
            <Button type="submit" bsSize="medium">Sign Up</Button>
          </div>
          </Col>
          </Modal.Body>
        </form>
        <Modal.Footer>
          <Button onClick={this.close} bsSize="medium">Close</Button>
        </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default SignupModal;
