import React from 'react';
import FontAwesome from 'react-fontawesome';

const Info = ({ data }) => {
  const text = <span className="grey-color">{data.text}</span>;
  return (
    <div>
      <FontAwesome name={data.icon} size="lg" className="yellow-color icon"/>
      {data.link ? <a href={data.link} target="_blank" rel="noopener noreferrer">{text}</a>: text }
    </div>
  );
}

export default Info;