import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CirclePic from './CirclePic';
import NameAndTitle from './NameAndTitle';
import Info from './Info';
import data from './data.json';

const Header = () => (
  <Grid className="cv-body">
    <Row className="green-background padding-bottom-10">
      <Col sm={8} xs={12}>
        <Row className="name-title">
          <Col xs={12} smHidden={true} mdHidden={true} lgHidden={true} className="pic-xs">
            <CirclePic/>
          </Col>
          <Col xs={12} className="text-xs-center">
            <NameAndTitle/>
          </Col>
          <div className="info">
            {data.infos.map(info => <Info key={info.icon} data={info}/>)}
          </div>
        </Row>
      </Col>
      <Col sm={4} xsHidden={true}>
        <CirclePic pullRight={true}/>
      </Col>
    </Row>
  </Grid>
);

export default Header;