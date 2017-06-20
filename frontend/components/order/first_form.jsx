import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup, ButtonGroup, PageHeader, Grid } from 'react-bootstrap';


class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringy_id: null,
      stringy_price: null,
      address: "",
      editing: "-1"
    };
    console.log(this.props.stringies);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.setString = this.setString.bind(this);
    this.renderWhiteSpace = this.renderWhiteSpace.bind(this);
    this.stringTypes = ["Synthetic gut", "Polyester", "Multifilament", "Hybrid", "Provide your own string"];
    this.stringHeader = ["Value performance", "Durability & Playability", "Comfort, Power, & Fuel", "The best of all worlds", "You know best"];
    this.stringDescriptions = ["The best choice for most players. These strings are very playable and affordable.",
                              "Polys are commonly used by pros and advanced players who have aggressive swings.",
                              "Multifilaments are great for players with less aggressive swings who are looking for a soft feel.",
                              "A hybrid usually blends a tougher string with a softer string to maximize durability and comfort.",
                              "Just send the string (40 feet) in with your racquet. We'll handle the rest."]
  }


  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value});
      this.props.updateForm(this.state);
    };
  }

  setString(e) {
    e.preventDefault();
    this.props.updateForm({stringy_id: parseInt(e.target.id)+1});
    // this.props.updateForm({stringy_price: this.props.stringies[parseInt(e.target.id)].price});
    this.setState({stringy_id: parseInt(e.target.id)+1});
  }

  setEdit(e) {
    e.preventDefault();
    if (!e.target.className.includes("sb")) {
      this.setState({editing: e.target.id});
      if (e.target.id == 4) {
        console.error("five")
        this.props.updateForm({stringy_id: 13});
        this.props.updateForm({stringy_price: 0});
        this.setState({stringy_id: 13});
      }
    }
  }

  nextForm(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateForm(this.state);
    this.props.nextStage(e);
  }

  renderWhiteSpace(idx) {
    if (this.state.editing == idx) {
      return (<div><br /> <br /> <br /> <br /></div>)
    }
  }

  renderErrors() {
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
      </ul>
    );
  }

  render() {
    console.log(this.state.editing);
    // const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>)
    let that = this;
    if (this.props.stringies) {
      that.stringList = (<ButtonGroup>
        {that.stringTypes.map((stringType, idx1) => {
          return (<Col lg={12} md={12} sm={12} className="string-entry pull-left">
          <Button className="string-type" onClick={this.setEdit} key={idx1} id={idx1}>
            <Col id={idx1} className="pull-left">
            <div id={idx1} className="sttname pull-left">
              {stringType}
            </div>
            <br className="sttname"/>
            <div id={idx1} className="stheader pull-left">{this.stringHeader[idx1]}
            </div>
            <br className="stheader"/>
            <div id={idx1} className="stdescription">{this.stringDescriptions[idx1]}</div>
            </Col>
            <div />
            {this.renderWhiteSpace(idx1)}
            <ButtonGroup className="pull-left ssbgt">
            {this.props.stringies.map((stringy, idx) => {
              if (stringy.typeof == stringType && this.state.editing == idx1) {
                  return (<div className="sb string-listing"><Button className="sb pull-left sub-button" onClick={this.setString} id={idx} key={idx}>
                            <div className="sb string-description pull-left" id={idx}>
                              {stringy.description}
                            </div>
                            <br/>
                            <div className="sb string-price pull-left pull-left" id={idx}>
                              &nbsp;+&nbsp;{stringy.price}
                            </div>
                          </Button></div>)
              }
            })}
            </ButtonGroup>
          </Button></Col>)
        })}
        </ButtonGroup>)
    }
    let stringOptions = null
    // console.log(that.stringList);
    // if (this.props.tasks) {
    //   taskOptions = this.props.tasks.map((task, i) => (
    //     <option key={i} value={task.id}>{task.title}</option>
    //   ));
    // }
    return (
      <form className="first-form" onSubmit={this.handleSubmit}>
        <div id="alert">{  this.renderErrors()   }
        </div>
        <Grid className="of1">
          <Row>
            <Col lg={8} md={8}>
              <h1><small>What kind of string do you need?</small></h1>
              {this.stringList}
            </Col>
          </Row>
          <Button className="submit" type="submit" value="Save" disabled={!this.state.stringy_id}>Save</Button>
        </Grid>
      </form>
    )
  }
}

export default FirstForm;
