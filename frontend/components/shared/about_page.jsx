import React from 'react';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup } from 'react-bootstrap';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Col lg={12}>
      <Row lg={12}> Designed and built by enthusiastic tennis players who want to make the
      sport easier to play and more accessible for everyone.
      </Row>
    </Col>
    )
  }

}

export default AboutPage;
