import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SectionHeader from './SectionHeader';
import data from './data.json';

const About = () => (
  <div>
    <Row>
      <SectionHeader icon={data.about.icon} title={data.about.title} />
    </Row>
    <Row>
      <Col xs={12} className="text-content">{data.about.text}</Col>
    </Row>
  </div>
);

export default About;
