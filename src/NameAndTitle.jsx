import React from 'react';

import data from './data.json';

const NameAndTitle = () => (
  <div>
    <span className="grey-color xx-large nowrap">{data.name}</span>
    <span className="yellow-color x-large"> / </span>
    <span className="grey-color x-large nowrap">{data.title}</span>
  </div>
);

export default NameAndTitle;