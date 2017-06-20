import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup, Grid } from 'react-bootstrap';
import React from 'react';


class PricingColumn extends React.Component {
  constructor(props) {
    super(props);
    this.first_buy = false;
    if (this.props.currentUser) {
      if (this.props.currentUser.first_buy) {
        this.first_buy = true;
      }
    }
    this.state = {
      stringy_id: this.props.stringy_id,
    };

  }

  render() {
    let show = null,
        stringy = null;
    if (this.props.price) {
      // console.error(this.props.stringy_id);
      show = (<div>
        {this.props.stringies[this.props.stringy_id-1].description}: <br />
        $ {this.props.price}
      </div>);
    }
    return (
      <Row className="right-floating">
        <Col lg={12}>
        <h4>Your Order</h4>
          <div>String job<br/>$ 40.00</div>
        {show}
        </Col>
      </Row>);

  }
}

export default PricingColumn;