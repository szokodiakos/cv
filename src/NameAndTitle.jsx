import React from 'react';

import './NameAndTitle.css';
import data from './data.json';

const NameAndTitle = () => (
  <div>
    <span className="name-title-color xx-large nowrap">{data.name}</span>
    <span className="name-title-separator-color x-large"> / </span>
    <span className="name-title-color x-large nowrap">{data.title}</span>
  </div>
);

export default NameAndTitle;
