import React from 'react';

import data from './data.json';

const CirclePic = ({ pullRight }) => (
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

export default CirclePic;