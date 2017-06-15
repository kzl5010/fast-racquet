import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup, Grid } from 'react-bootstrap';
import React from 'react';


class PricingColumn extends React.Component {
  constructor(props) {
    super(props);
    let first_buy = false;
    if (this.props.currentUser) {
      if (this.props.currentUser.first_buy) {
        first_buy = true;
      }
    }
    this.state = {
      first_buy: first_buy,
      price: this.props.price,
      stringy_id: this.props.stringy_id,
    };

  }

  render() {
    if (this.state.stringy_id) {
      (<Row>
        {this.props.stringies[this.state.stringy_id].price}
      </Row>)
    }
    return (
      <Row>Hello
      1231290
      {this.props.price}
      </Row>);

  }
}

export default PricingColumn;