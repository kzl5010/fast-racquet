import React from 'react';
// import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup } from 'react-bootstrap';


class SecondForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tension: null,
      instructions: null,
      errors: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value});
      this.props.updateForm(this.state);
    }
  }


  updateTasker(tasker_id, e) {
    let that = this;
    this.setState({tasker_id: tasker_id}, function(){
      that.handleSubmit(e);
      // that.props.updateForm(that.state);
    });
  }

  nextForm(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateForm(this.state);
    this.props.nextStage(e);
  }

  render() {
      return (
        <form className="second-form" onSubmit={this.handleSubmit}>
          <h4>Choose a tension</h4>
              <InputGroup>
              <FormControl type="number" value={this.state.tension} placeholder="lbs"
              onChange={this.handleChange("tension")} className=""
              min="35.0" max="80.0" step="0.5"/>
              </InputGroup>
              <Col>Any special instructions?</Col>
              <InputGroup>
                <FormControl type="textarea" value={this.state.instructions} placeholder=""
                onChange={this.handleChange("instructions")}/>
              </InputGroup>
              <button className="submit" type="submit" value="Save">Save
              </button>
          </form>
    );
  }
}

export default SecondForm;
