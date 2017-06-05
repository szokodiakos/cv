import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

class App extends Component {
  render() {
    const infos = [{
      icon: 'map-marker',
      text: '17/a, Dembinszky st, Hatvan, Hungary'
    }, {
      icon: 'phone',
      text: '+3630 960 1136'
    }, {
      icon: 'envelope',
      text: 'szokodiakos@gmail.com',
      link: 'mailto:szokodiakos@gmail.com'
    }, {
      icon: 'github',
      text: '/szokodiakos',
      link: 'http://github.com/szokodiakos'
    }, {
      icon: 'linkedin-square',
      text: '/in/szokodiakos',
      link: 'http://linkedin.com/in/szokodiakos'
    }];

    const circlePic = ({ pullRight } = {}) => (
      <div className={`circle outer-circle center grey-background ${pullRight && 'pull-right'}`}>
        <div className="circle inner-circle yellow-background">
          <img
            className="img-circle profile-pic"
            alt="Ákos Szokodi"
            src="https://avatars0.githubusercontent.com/u/5138121?v=3&u=f605ee1d860c0118c9967d959ee3044378042d42&s=400"
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
      <Col xs={12} className="text-content">
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
                  <span className="grey-color xx-large nowrap">Ákos Szokodi</span>
                  <span className="yellow-color x-large">/</span>
                  <span className="grey-color x-large nowrap">software engineer</span>
                </Col>
                <div className="info">
                  {infos.map(info => {
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
            {section({ icon: 'info', text: 'About' })}
          </Row>
          <Row>
            <Col xs={12} className="text-content">
              Full-stack Software Engineer mainly with backend and database orientation. Passionate about software quality (UX design, design patterns, clean coding, unit testing, linting). Fluent in JavaScript, although believes polyglot development is a good philosophy as engineers shouldn't be locked into a single language and should always adapt the technology according to the problem. Likes to try out new libraries/languages, write blog posts and hack together useful solutions.
            </Col>
          </Row>
          <Row>
            {section({ icon: 'briefcase', text: 'Experience' })}
          </Row>
          <Row>
            {facts({
              name: 'Coding Sans Ltd.',
              title: 'Full-stack Software Engineer',
              date: 'May 2015 - Present',
              points: [
                'Development of several microservice and monolith web',
                'Architecting multiple projects module-, API- and database structure-wise',
                'Used languages: JavaScript (ES5/2015/2017), TypeScript, Python',
                'Used technologies: Node (notable frameworks: Express, Mongoose, Sequelize, Serverless), Angular (1 and 2), React, multiple SQL (MySQL, Postgres) and NoSQL (MongoDB, Redis) database technologies, Docker, Git, Bash, AWS (for operation)'
              ]
            })}
            {facts({
              name: 'Quanopt Ltd.',
              title: 'Junior Software Engineer',
              date: 'June 2013 - August 2014',
              points: [
                'Browser based data visualization solution',
                'Used languages: R, Processing (Java)',
                'Shiny web framework (for R), Dojo (and Dijit) Toolkit and various JavaScript charting libraries'
              ]
            })}
          </Row>
          <Row>
            {section({ icon: 'graduation-cap', text: 'Education' })}
          </Row>
          <Row>
            {facts({
              name: 'Budapest University of Technology and Economics',
              title: 'Computer Engineering MSc',
              date: 'January 2016 - January 2014',
              points: [
                'Specialized in Fault-tolerant System Design'
              ]
            })}
            {facts({
              name: 'Budapest University of Technology and Economics',
              title: 'Computer Engineering BSc',
              date: 'January 2014 - September 2010',
              points: [
                'Specialized in System Design'
              ]
            })}
          </Row>
          <Row>
            {section({ icon: 'lightbulb-o', text: 'Personal skills' })}
          </Row>
          <Row>
            {facts({
              points: [
                'Good command in written and spoken English (B2 Complex)',
                'Basic communication skill in German (B2 Complex)',
                'Knowledge in Adobe Photoshop and Illustrator',
                'Driver’s license (B)'
              ]
            })}
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