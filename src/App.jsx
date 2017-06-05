import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

import data from './data.json';

class App extends Component {
  render() {
    const circlePic = ({ pullRight } = {}) => (
      <div className={`circle outer-circle center grey-background ${pullRight && 'pull-right'}`}>
        <div className="circle inner-circle yellow-background">
          <img
            className="img-circle profile-pic"
            alt={data.name}
            src={data.pic}
          />
        </div>
      </div>
    );

    const section = ({ icon, text } = {}) => (
      <Col xs={12} className="section">
        <div className="circle yellow-background section-circle">
          <FontAwesome name={icon} size="2x" className="icon section-icon"/>
        </div>
        <div className="section-label large green-background white-color">{text}</div>
      </Col>
    );

    const facts = ({ name, title, date, points = [] } = {}) => (
      <Col key={date || moment().toJSON()} xs={12} className="text-content">
        {name && <span className="large">{name}</span>}
        <ul className="fa-ul">
          {title && <li>
            <FontAwesome name="dot-circle-o" className="fa-li green-color"/>{title}
          </li>}
          {date && <li>
            <FontAwesome name="dot-circle-o" className="fa-li yellow-color"/>{date}
          </li>}
          {points.map(point => (
            <li key={point}>
              <FontAwesome name="dot-circle-o" className="fa-li grey-color"/>{point}
            </li>
          ))}
        </ul>
      </Col>
    );

    return (
      <div className="bitter">
        <Grid className="cv-body">
          <Row className="green-background">
            <Col sm={8} xs={12}>
              <Row className="name-title">
                <Col xs={12} smHidden={true} mdHidden={true} lgHidden={true} className="pic-xs">
                  {circlePic()}
                </Col>
                <Col xs={12} className="text-xs-center">
                  <span className="grey-color xx-large nowrap">{data.name}</span>
                  <span className="yellow-color x-large"> / </span>
                  <span className="grey-color x-large nowrap">{data.title}</span>
                </Col>
                <div className="info">
                  {data.infos.map(info => {
                    const text = <span className="grey-color">{info.text}</span>;
                    return (
                      <div key={info.icon}>
                        <FontAwesome name={info.icon} size="lg" className="yellow-color icon"/>
                        {info.link ? <a href={info.link} target="_blank" rel="noopener noreferrer">{text}</a>: text }
                      </div>
                    );
                  })}
                </div>
              </Row>
            </Col>
            <Col sm={4} xsHidden={true}>
              {circlePic({ pullRight: true })}
            </Col>
          </Row>
        </Grid>
        <Grid className="cv-body">
          <Row>
            {section({ icon: data.about.icon, text: data.about.title })}
          </Row>
          <Row>
            <Col xs={12} className="text-content">{data.about.text}</Col>
          </Row>
          <Row>
            {section({ icon: data.experience.icon, text: data.experience.title })}
          </Row>
          <Row>
            {data.experience.items.map(item => facts({ ...item }))}
          </Row>
          <Row>
            {section({ icon: data.education.icon, text: data.education.title })}
          </Row>
          <Row>
            {data.education.items.map(item => facts({ ...item }))}
          </Row>
          <Row>
            {section({ icon: data.personalSkills.icon, text: data.personalSkills.title })}
          </Row>
          <Row>
            {data.personalSkills.items.map(item => facts({ ...item }))}
          </Row>
        </Grid>
        <Grid className="cv-body">
          <Row className="green-background">
            <div className="closing white-color small">
              {moment().format('YYYY-MM-DD')}
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;