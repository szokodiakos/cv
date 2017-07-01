import React from 'react';
import { Row } from 'react-bootstrap';

import SectionHeader from './SectionHeader';
import Facts from './Facts';
import data from './data.json';

const Education = () => (
  <div>
    <Row>
      <SectionHeader icon={data.education.icon} title={data.education.title} />
    </Row>
    <Row>
      {data.education.items.map(item => <Facts key={item.date} {...item} />)}
    </Row>
  </div>
);

export default Education;
