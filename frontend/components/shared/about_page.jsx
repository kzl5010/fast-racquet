import React from 'react';
import { Modal, Button, Tooltip, Col, FormGroup, FormControl, Clearfix, Row, InputGroup, Image } from 'react-bootstrap';
import SecondHeaderContainer from './second_header_container';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-container">
        <SecondHeaderContainer/>
        <div className="text-center">
        </div>
        <Col lg={12}>
          <Row lg={12}> Designed and built by enthusiastic tennis players who want to make the
          sport easier to play and more accessible for everyone. This project is currently in a suspended state pending changes
              to the marketplace.
          </Row>
        </Col>
      </div>
    )
  }

}

export default AboutPage;
