import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup } from 'react-bootstrap';


class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringy_id: null,
      address: "",
      editing: "-1"
    };
    console.log(this.props.stringies);
    this.stringlist = ""
    this.onChange = (address) => this.setState({ address });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.setString = this.setString.bind(this);
    this.stringTypes = ["Synthetic gut", "Polyester", "Multifilament", "Hybrid", "Provide your own string"]
  }


  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value});
      this.props.updateForm(this.state);
    }
  }

  setString(e) {
    e.preventDefault();
    this.props.updateForm({stringy_id: e.target.id+1});
    this.setState({stringy_id: e.target.id+1});
  }

  setEdit(e) {
    e.preventDefault();
    console.log(e.target)
    if (!e.target.className.includes("sub-button")) {
      this.setState({editing: e.target.id})
      if (e.target.id == 4) {
        this.setState({stringy_id: 13})
        this.props.updateForm(this.state);
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

    // const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>)
    let that = this;
    if (this.props.stringies) {
      that.stringList = (<Row>
        {that.stringTypes.map((stringType, idx1) => {
          return (<Col lg={12} md={12}><Button onClick={this.setEdit} key={idx1} id={idx1}>{stringType}
            {this.props.stringies.map((stringy, idx) => {
              if (stringy.typeof == stringType && this.state.editing == idx1) {
                  return (<Button className="sub-button" onClick={this.setString} id={idx} key={idx}>{stringy.description}</Button>)
              }
            })}
          </Button></Col>)
        })}
        </Row>)
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
          <h4>What kind of string do you need?</h4>
            <div id="alert">{  this.renderErrors()   } </div>
            {this.stringList}
            <Button className="submit" type="submit" value="Save" disabled={!this.state.stringy_id}>Save</Button>
      </form>
    )
  }
}

export default FirstForm;
