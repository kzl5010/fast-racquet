// TODO FIX THIS WITH BOOTSTRAP
import React from 'react';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import StripeCheckout from 'react-stripe-checkout';

class ThirdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: this.props.instructions,
      stringy_id: this.props.stringy_id,
      address: null,
      tension: this.props.tension,
      // date: this.props.date,
      price: this.props.price,
    };
    this.onToken = this.onToken.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onToken(token) {
    token.amount = Number(this.state.price);
    console.log(JSON.stringify(token));
    fetch('/api/charges', {
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers':'X-Requested-With'
    },
    }).then(response => {
      console.log(response);
      if (response.status == 200) {
        console.log("Success");
      }
      response.json();
    });
  }



  handleSubmit(e) {
    e.preventDefault();
    // this.props.updateForm(this.state);
    // stripe.card.createToken(e.currentTarget, function (status, response) {
    //   console.log( status, response );
    // });
    this.props.nextStage(e);
  }


  render() {
    return (
      <div className="request-details" onSubmit={this.handleSubmit}>


      <div className='third-form'>
        <h1> Are these details correct? </h1>
        <p>Stringy{this.props.stringy_id}</p>
        <p>Tension <br/><strong>{this.props.tension}</strong></p>
        <p>Place <br/><strong>{this.props.address}</strong></p>
        <p>Instruction <br/><strong>{this.props.instructions}</strong></p>
        <input className='submit' type="submit" value="Confirm & Book"/>
      </div>

      <StripeCheckout
        token={this.onToken}
        amount={Number(this.state.price)*100}
        currency="USD"
        name="Fast Racquet Inc."
        stripeKey="pk_test_L5srPMcfjPhbApU6CKVQs7lm"
      />
      </div>
    );
  }
}

export default ThirdForm;
