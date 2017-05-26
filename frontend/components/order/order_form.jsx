import React from 'react';
// import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup } from 'react-bootstrap';

// import DatePicker from 'react-datepicker';
// import TaskerIndexContainer from '../tasker/tasker_index_container';
import FirstForm from './first_form';
import SecondForm from './second_form';
import ThirdForm from './third_form';
// import { hashHistory } from 'react-router'

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1,
      user_id: this.props.currentUser.id,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      // task_id: this.props.params.taskId,
      // address: "",
      price: "40.00",
      form: {
        stringy_id: "1",
        address: null
      },
      form2: {
        tension: null,
        instructions: null
      },
      // details: "",
      errors: null
    };

    this.onChange = (address) => this.setState({ address });
    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.updateForm2 = this.updateForm2.bind(this);
    this.nextStage = this.nextStage.bind(this);
    console.log(this.state);
  }

  formComplete() {
    this.missingFields = [];
    if (!this.state.form.stringy_id) {
      this.missingFields.push("Please choose a string. ");
    }
    // if (!this.state.form.task_id) {
    //   this.missingFields.push("Please choose a task. ");
    // }
    // if (!this.state.form.address) {
    //   this.missingFields.push("Please choose an address.");
    // }
    if (this.missingFields.length > 0) {
      // this.displayMissing();
    }
    return (this.state.form.stringy_id);
    //&& this.state.form.task_id && this.state.form.address
  }

  secondFormComplete() {
    this.missingFields = [];
    if (!this.state.form2.tension) {
      this.missingFields.push("You must set a tension");
    }
    // if (!this.state.form2.date) {
    //   this.missingFields.push("You must choose a day");
    // }
    // if (!this.state.form2.hours) {
    //   this.missingFields.push("You must choose a time frame");
    // }
    if (this.missingFields.length > 0) {
      // this.displayMissing();
    }
    return (this.state.form2.tension);
    // && this.state.form2.tasker_id && this.state.form2.hours
  }

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
    } else if (this.state.stage === 3){
      // this.handleSubmit();
      let order = this.state;
      order.stringy_id = this.state.form.stringy_id;
      order.tension = this.state.form2.tension;
      order.instructions = this.state.form2.instructions;
      order.details = this.state.form.details;
      order.address_line_one = "Test";
      order.city = "Test1";
      order.state = "NJ";
      order.zip_code = "Fake";
      // console.log(taskRequest);
      // taskRequest.task_id = this.props.params.taskId;
      this.props.createOrder(order);
      hashHistory.push("/")
    }
  }

  componentDidMount() {
    this.props.fetchStringies();
    // this.props.fetchTaskers();
  }

  componentWillMount() {
    // let that = this;
    // let p1 = new Promise(
    //   (resolve, reject) => {
    //     that.props.fetchStringies()
    //   }
    // )
    this.props.fetchStringies();
    console.log(this.props)
    let stringies = ""
    window.setTimeout(this.setState({stringies: stringies}), 500);
  }

  updateForm(obj) {
    this.setState({form: obj});
  }

  updateForm2(obj) {
    this.setState({form2: obj});
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  changeDate(date) {
    this.setState({ date: date});
  }

  nextForm(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    // e.preventDefault();
    let order = this.state;
    order.price = this.state.price + this.props.stringies[this.state.stringy_id-1].price;
    order.stringy_id = this.state.form.stringy_id;
    order.tension = this.state.form2.tension;
    order.instructions = this.state.form2.instructions;
    order.details = this.state.form.details;
    order.address_line_one = "Test";
    order.city = "Test1";
    order.state = "NJ";
    order.zip_code = "Fake";
    this.props.createOrder(order);
    // this.setState({
    //   address: "",
    //   tasker_id: "",
    //   date: moment(),
    //   details: "",
    //   hours: 1
    // });
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
    console.log(this.state);
    let stringies;
    if (this.props.stringies) {
         stringies = this.props.stringies.map((stringy, i)=>(
        <option key={i} value={stringy.id}>{stringy.description}</option>
      ));
    }


    let stage;
    if (this.state.stage === 1) {
      stage = <FirstForm nextStage={this.nextStage} updateForm={this.updateForm} stringies={this.props.stringies}/>
    } else if (this.state.stage === 2) {
      stage = <SecondForm nextStage={this.nextStage} updateForm={this.updateForm2} stringies={this.props.stringies}/>
    } else {
      stage = <ThirdForm nextStage={this.nextStage} price={this.state.price} submit={this.handleSubmit}
      instructions={this.state.form2.instructions} tension={this.state.form2.tension} stringy_id={this.state.form.stringy_id}
      address={"this.props.form.address"} stringies={this.props.stringies}/>
    }

    return (
      <section className="taskRequest-container">
        <div id="alert"></div> { //TODO FIX THIS??? ERRORS
        }
        <nav className='stage-header'>
          <ul className='stage-items-group'>
            <li id='1' className='stage-active'><strong>1.</strong>Pick your string <b>></b></li>
            <li id='2'><strong>2.</strong>Set your tension ></li>
            <li id='3'><strong>3.</strong> Place order</li>
          </ul>
        </nav>
        <div className="booking-form">
          <p className="missing-fields">{this.missingFields}</p>
          {stage}
        </div>
      </section>
    )

  }
}

export default OrderForm;
