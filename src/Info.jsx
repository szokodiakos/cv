import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import './Info.css';

const Info = ({ data }) => {
  const text = <span className="info-item-color">{data.text}</span>;
  return (
    <div>
      <FontAwesome name={data.icon} size="lg" className="info-item-icon-color icon" />
      {data.link ? <a href={data.link} target="_blank" rel="noopener noreferrer">{text}</a> : text }
    </div>
  );
};

const dataPropType = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Info.propTypes = {
  data: PropTypes.shape(dataPropType).isRequired,
};

export default Info;
