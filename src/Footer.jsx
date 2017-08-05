import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import './Footer.css';
import data from './data.json';

const Footer = () => (
  <Grid className="cv-body no-print">
    <Row className="green-background">
      <div className="closing white-color small">
        {data.lastUpdated}
      </div>
    </Row>
  </Grid>
);

export default Footer;
