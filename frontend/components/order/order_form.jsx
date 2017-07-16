import React from 'react';
import parser from 'parse-address';
import { Grid, Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup } from 'react-bootstrap';
import { hashHistory } from 'react-router';
import SecondHeaderContainer from '../shared/second_header_container';
import FirstForm from './first_form';
import SecondForm from './second_form';
import ThirdForm from './third_form';
import PricingColumn from './pricing';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    let userID = null;
    this.firstBuy = false
    if (this.props.currentUser) {
      userID = this.props.currentUser.id;
      if (this.props.currentUser.first_buy) {
        this.firstBuy = true;
      }
    }
    let total_price = 40.00;
    this.state = {
      stage: 1,
      user_id: userID,
      total_price: total_price,
      form: {
        stringy_id: null,
      },
      form2: {
        tension: null,
        instructions: null,
      },
      form3: {
        first_name: null,
        last_name: null,
        address: null,
        zip_code: null,
        stripe_paid: false,
      },
      errors: null
    };
    this.stringy_price = null;
    this.onChange = (address) => this.setState({ address });
    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.updateForm2 = this.updateForm2.bind(this);
    this.updateForm3 = this.updateForm3.bind(this);
    this.nextStage = this.nextStage.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchStringies();
  }

  componentWillMount() {
    this.props.fetchStringies();
  }

  formComplete() {
    this.missingFields = [];
    if (!this.state.form.stringy_id) {
      this.missingFields.push("Please choose a string. ");
    }
    if (this.missingFields.length > 0) {
      return null;
    }
    return (this.state.form.stringy_id);
  }

  secondFormComplete() {
    this.missingFields = [];
    if (!this.state.form2.tension) {
      this.missingFields.push("You must set a tension");
    }
    if (this.missingFields.length > 0) {
      return null;
    }
    return (this.state.form2.tension);
  }

  thirdFormComplete() {
    this.missingFields = [];
    if (!this.state.form3.address) {
      this.missingFields.push("Please choose an address.");
      return null;
    }
    if (!this.state.form3.stripe_paid) {
      this.missingFields.push("Please choose an address.");
      return null;
    }
    return this.state.form3.address;

  }
  //TODO Why am i not using handlesubmit??
  nextStage(e) {
    e.preventDefault();
    if ((this.state.stage === 1) && this.formComplete()) {
      this.setState({ stage: 2 });
      $('#1').removeClass('stage-active');
      $('#1').addClass('stage-complete');
      $('#2').addClass('stage-active');
    } else if ((this.state.stage === 2) && this.secondFormComplete()) {
      this.setState({ stage: 3 });
      $('#2').removeClass('stage-active');
      $('#2').addClass('stage-complete');
      $('#3').addClass('stage-active');
    } else if (this.state.stage === 3 && this.thirdFormComplete()){
      // this.handleSubmit();
      const parsedAddress = parser.parseLocation(this.state.form3.address)
      let order = this.state;
      order.first_name = this.state.form3.first_name;
      order.last_name = this.state.form3.last_name;
      order.stringy_id = this.state.form.stringy_id;
      order.tension = this.state.form2.tension;
      order.instructions = this.state.form2.instructions;
      order.price = this.state.total_price + this.props.stringies[this.state.form.stringy_id-1].price;
      if (this.firstBuy) {
        order.price /= 2.00;
      }
      order.details = this.state.form.details;
      order.address_line_one = parsedAddress.number + " " + (parsedAddress.prefix || "") + parsedAddress.street
        + " " + parsedAddress.type;
      order.city = parsedAddress.city;
      order.state = parsedAddress.state;
      order.zip_code = this.state.form3.zip_code;
      this.props.createOrder({order});
      hashHistory.push("/");
    }
  }

  updateForm(obj) {
    this.setState({form: obj});
  }

  updateForm2(obj) {
    this.setState({form2: obj});
  }

  updateForm3(obj) {
    this.setState({form3: obj});
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  changeDate(date) {
    this.setState({ date: date});
  }

  goBack(e) {
    e.preventDefault();
    if (this.state.stage > e.target.id) {
      this.setState({stage: e.target.id});
    }
  }
  handleSubmit(e) {
    // e.preventDefault();
    let order = this.state;
    order.price = this.state.price + this.props.stringies[this.state.stringy_id-1].price;
    console.error(this.state.form3.address);
    console.error(parser.parseLocation(this.state.form3.address));
    order.first_name = this.state.form3.first_name;
    order.last_name = this.state.form3.last_name;
    order.stringy_id = this.state.form.stringy_id;
    order.tension = this.state.form2.tension;
    order.instructions = this.state.form2.instructions;
    order.details = this.state.form.details;
    order.address_line_one = "Test";
    order.city = "Test1";
    order.state = "NJ";
    order.zip_code = "Fake";
    this.props.createOrder({order});
    hashHistory.push("/");
  }

  renderErrors() {
    console.log(this.missingFields);
    if (this.props.errors === undefined) {
      return null;
    }
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
        {this.missingFields
        }
      </ul>
    );
  }

  render() {
    if (!this.props.stringies){
      return (<div>Hi</div>);
    }
    if (this.state.form.stringy_id) {
      this.stringy_price = this.props.stringies[this.state.form.stringy_id-1].price;
    }

    console.log(this.state.form.stringy_id);


    let stage;
    if (this.state.stage === 1) {
      stage = <FirstForm nextStage={this.nextStage} updateForm={ this.updateForm } stringies={this.props.stringies}/>
    } else if (this.state.stage === 2) {
      stage = <SecondForm nextStage={this.nextStage} updateForm={this.updateForm2} stringies={this.props.stringies}/>
    } else {
      stage = <ThirdForm nextStage={this.nextStage} price={this.state.total_price} submit={this.handleSubmit}
      instructions={this.state.form2.instructions} tension={this.state.form2.tension} stringy_id={this.state.form.stringy_id}
      stringies={this.props.stringies} updateForm={ this.updateForm3 } stringy_price={this.stringy_price} firstBuy={this.firstBuy} />;
    }
    const textStyle = {
      fontSize: '2em',
    };
    return (
      <section className="taskRequest-container">
        <SecondHeaderContainer />
        <div id="alert"></div> { // TODO FIX THIS??? ERRORS
        }
        <nav className='stage-header'>
        <Grid>
          <Row className='show-grid'>
            <Col style={textStyle} lg={4} md={4} sm={4} id='1' className='text-center stage-active stage-items-group'>Pick your string </Col>
            <Col style={textStyle} lg={4} md={4} sm={4} className="text-center stage-items-group" id='2'>Set your tension</Col>
            <Col style={textStyle} lg={4} md={4} sm={4} className="text-center stage-items-group" id='3'> Place order</Col>
          </Row>
        </Grid>
        </nav>
        <Grid className="booking-form">
          <p className="missing-fields">{this.missingFields}</p>
          <Row>
            <Col lg={8} md={8} sm={8}>
          {stage}
            </Col>
          <Col lg={4} md={4} sm={4}>
           <PricingColumn price={ this.stringy_price } currentUser={ this.props.currentUser } stringy_id={ this.state.form.stringy_id } stringies={this.props.stringies}
                          />
          </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default OrderForm;
