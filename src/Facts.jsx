import React from 'react';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

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
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  points: React.PropTypes.arrayOf(React.PropTypes.string),
};

Facts.defaultProps = {
  points: [],
};

export default Facts;
