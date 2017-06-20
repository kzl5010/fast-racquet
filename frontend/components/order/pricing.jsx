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
    let total = 40.00
    if (this.props.price) {
      total += Number(this.props.price);
      // console.error(this.props.stringy_id);
      show = (<div>
        {this.props.stringies[this.props.stringy_id-1].description}: <br />
        $ {this.props.price}
      </div>);
    }
    let discount = null;
    if (this.first_buy) {
      total /= 2.00;
      discount = (<div>50% Deal for your first purchase!</div>)
    }
    return (
      <Row className="right-floating">
        <Col lg={12}>
        <h4>Your Order</h4>
          <div>String job<br/>$ 40.00</div>
          {show}
          {discount}
        <div>Your total: ${total} </div>
        </Col>
      </Row>);

  }
}

export default PricingColumn;