import React from 'react';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Facts = ({ name, title, date, points }) => (
  <Col xs={12} className="text-content">
    {name && <span className="large">{name}</span>}
    <ul className="fa-ul">
      {title && <li>
        <FontAwesome name="dot-circle-o" className="fa-li green-color" />{title}
      </li>}
      {date && <li>
        <FontAwesome name="dot-circle-o" className="fa-li yellow-color" />{date}
      </li>}
      {points.map(point => (
        <li key={point}>
          <FontAwesome name="dot-circle-o" className="fa-li grey-color" />{point}
        </li>
      ))}
    </ul>
  </Col>
);

Facts.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string),
};

Facts.defaultProps = {
  points: [],
};

export default Facts;
