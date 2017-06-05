import React from 'react';
import moment from 'moment';
import { Grid, Row } from 'react-bootstrap';

const Footer = () => (
  <Grid className="cv-body">
    <Row className="green-background">
      <div className="closing white-color small">
        {moment().format('YYYY-MM-DD')}
      </div>
    </Row>
  </Grid>
);

export default Footer;