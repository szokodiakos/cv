import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Info = ({ data }) => {
  const text = <span className="grey-color">{data.text}</span>;
  return (
    <div>
      <FontAwesome name={data.icon} size="lg" className="yellow-color icon" />
      {data.link ? <a href={data.link} target="_blank" rel="noopener noreferrer">{text}</a> : text }
    </div>
  );
};

const dataPropType = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Info.propTypes = {
  data: PropTypes.shape(dataPropType).isRequired,
};

export default Info;
