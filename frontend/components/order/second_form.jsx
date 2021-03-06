import React from 'react';
// import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup, Grid } from 'react-bootstrap';


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
    };
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
    const inputStyle = {
      width: '25%',
    };
    const gridStyle = {
      marginLeft: '10%',
    };
      return (
        <form className="second-form" onSubmit={this.handleSubmit}>
          <Grid className="of1">

            <Row>
              <Col lg={8} md={8} style={gridStyle}>
                <h4>Choose a tension</h4>
                <InputGroup style={inputStyle}>
                  <FormControl type="number" value={this.state.tension} placeholder="lbs"
                               onChange={this.handleChange("tension")} className=""
                               min="35.0" max="80.0" step="0.5"/>
                </InputGroup>
                <Col>Any special instructions?</Col>
                <InputGroup style={inputStyle}>
                  <FormControl type="textarea" value={this.state.instructions} placeholder="Optional"
                               onChange={this.handleChange("instructions")}/>
                </InputGroup>
                <Button disabled={!this.state.tension} className="submit" type="submit" value="Save">Save
                </Button>
              </Col>
            </Row>
          </Grid>
        </form>
    );
  }
}

export default SecondForm;
