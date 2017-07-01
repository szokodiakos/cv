import React from 'react';
import { Row } from 'react-bootstrap';

import SectionHeader from './SectionHeader';
import Facts from './Facts';
import data from './data.json';

const Experience = () => (
  <div>
    <Row>
      <SectionHeader icon={data.experience.icon} title={data.experience.title} />
    </Row>
    <Row>
      {data.experience.items.map(item => <Facts key={item.date} {...item} />)}
    </Row>
  </div>
);

export default Experience;
