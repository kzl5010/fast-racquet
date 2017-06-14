import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup, Grid } from 'react-bootstrap';
import React from 'react';


class PricingColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.
      price: this.props.price,
    };
  }

  render() {
    return (<Grid>
      {this.props.price}
    </Grid>)

  }
}

export default PricingColumn;