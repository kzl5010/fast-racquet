import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup } from 'react-bootstrap';


class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringy_id: null,
      address: ""
    };
    this.stringlist = ""
    this.onChange = (address) => this.setState({ address });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTasker = this.updateTasker.bind(this);
    this.stringTypes = ["Synthetic gut", "Polyester", "Multifilament", "Hybrid", "Provide your own string"]
  }

  componentDidMount() {
    this.stringlist = (<Col>
      this.stringTypes.map((stringType) => {
        <Col>stringType
        {this.props.stringies.map((stringy) => {
          if (stringy.typeof == stringType) {
              return (<Row>stringy.description</Row>)
          }
        })}
        </Col>
      })
      </Col>)
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value});
      this.props.updateForm(this.state);
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

    let stringOptions = null
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
            <button className="submit" type="submit" value="Save">Save</button>
      </form>
    );
  }
}

export default FirstForm;
