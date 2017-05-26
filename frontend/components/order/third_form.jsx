import React from 'react';
import moment from 'moment';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup } from 'react-bootstrap';


class ThirdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: this.props.instructions,
      stringy_id: this.props.stringy_id,
      address: this.props.address,
      tension: this.props.tension,
      date: this.props.date,
      price: this.props.price
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    // this.props.updateForm(this.state);
    this.props.nextStage(e);
  }


  render() {
    return (
      <form className="request-details" onSubmit={this.handleSubmit}>


      <div className='third-form'>
        <h1> Are these details correct? </h1>
        <p>String <br/><strong>{this.props.stringies[this.props.stringy_id-1].description}</strong></p>
        <p>Tension <br/><strong>{this.props.tension}</strong></p>
        <p>Place <br/><strong>{this.props.address}</strong></p>
        <p>Instruction <br/><strong>{this.props.instructions}</strong></p>
        <input className='submit' type="submit" value="Confirm & Book"/>
      </div>

      </form>
    );
  }
}

export default ThirdForm;
