// TODO FIX THIS WITH BOOTSTRAP
import React from 'react';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup, Grid } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import StripeCheckout from 'react-stripe-checkout';

class ThirdForm extends React.Component {
  constructor(props) {
    super(props);
    this.stripe_paid = false;
    this.state = {
      instructions: this.props.instructions,
      stringy_id: this.props.stringy_id,
      address: "",
      first_name: "",
      last_name: "",
      tension: this.props.tension,
      stripe_paid: false,
    };
    this.onChange = (address) => this.setState({ address });
    this.handleChange = this.handleChange.bind(this);
    this.onToken = this.onToken.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value});
      this.props.updateForm(this.state);
    };
  }

  onToken(token) {
    let that = this;
    this.props.updateForm(this.state);
    token.amount = Number(this.props.price);
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
      console.log(token);
      if (response.status == 200) {
        console.log("Success");
        that.stripe_paid = true;
      }
      // response.json();
    });
  }



  handleSubmit(e) {
    e.preventDefault();
    // this.props.updateForm(this.state);
    this.props.nextStage(e);
  }


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    let stripe = null;
    if (this.state.address) {
      stripe = (<StripeCheckout
        token={this.onToken}
        amount={Number(this.props.price)*100}
        currency="USD"
        name="Fast Racquet Inc."
        shippingAddress={false}
        billingAddress={true}
        zipCode={true}
        stripeKey="pk_test_L5srPMcfjPhbApU6CKVQs7lm"
      />);
    }
    const AutoCompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>)

    return (
      <Grid className="request-details" onSubmit={this.handleSubmit}>
        <InputGroup>
          <FormControl type="textarea" value={this.state.first_name} placeholder="First Name"
                       onChange={this.handleChange("first_name")} className=""/>
        </InputGroup>
        <InputGroup>
          <FormControl type="textarea" value={this.state.last_name} placeholder="Last Name"
                       onChange={this.handleChange("last_name")}/>
        </InputGroup>

        <InputGroup>
          <PlacesAutocomplete inputProps={inputProps} autocompleteItem={AutoCompleteItem}/>

        </InputGroup>
        <div className='third-form'>
          <h1> Are these details correct? </h1>
          <p>Stringy{this.props.stringy_id}</p>
          <p>Tension <br/><strong>{this.props.tension}</strong></p>
          <p>Place <br/><strong>{this.props.address}</strong></p>
          <p>Instruction <br/><strong>{this.props.instructions}</strong></p>
          <Button disabled={!this.stripe_paid} className='submit' type="submit" value="Confirm & Book"/>
        </div>
        {stripe}

      </Grid>
    );
  }
}

export default ThirdForm;
