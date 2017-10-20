import React from 'react';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import './Facts.css';

const Facts = ({ name, title, date, points }) => (
  <Col xs={12} className="text-content">
    {name && <span className="large">{name}</span>}
    <ul className="fa-ul">
      {title && <li>
        <FontAwesome name="dot-circle-o" className="fa-li primary-fact-color" />{title}
      </li>}
      {date && <li>
        <FontAwesome name="dot-circle-o" className="fa-li interval-fact-color" />{date}
      </li>}
      {points.map(point => (
        <li key={point}>
          <FontAwesome name="dot-circle-o" className="fa-li misc-fact-color" />
          <div dangerouslySetInnerHTML={{ __html: point }} />
        </li>
      ))}
    </ul>
  </Col>
);

Facts.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.string),
};

Facts.defaultProps = {
  name: '',
  date: '',
  title: '',
  points: [],
};

export default Facts;
