import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Header.css';
import CirclePic from './CirclePic';
import NameAndTitle from './NameAndTitle';
import Info from './Info';
import data from './data.json';

const Header = () => (
  <Grid className="cv-body">
    <Row className="header-background padding-bottom-10">
      <Col sm={8} xs={12}>
        <Row className="name-title">
          <Col xs={12} smHidden mdHidden lgHidden className="pic-xs">
            <CirclePic />
          </Col>
          <Col xs={12} className="text-xs-center">
            <NameAndTitle />
          </Col>
          <div className="info">
            {data.infos.map(info => <Info key={info.icon} data={info} />)}
          </div>
        </Row>
      </Col>
      <Col sm={4} xsHidden>
        <CirclePic pullRight />
      </Col>
    </Row>
  </Grid>
);

export default Header;
