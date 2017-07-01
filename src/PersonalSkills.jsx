import React from 'react';
import { Row } from 'react-bootstrap';

import SectionHeader from './SectionHeader';
import Facts from './Facts';
import data from './data.json';

const PersonalSkills = () => (
  <div>
    <Row>
      <SectionHeader icon={data.personalSkills.icon} title={data.personalSkills.title} />
    </Row>
    <Row>
      {data.personalSkills.items.map(item => <Facts key="key" {...item} />)}
    </Row>
  </div>
);

export default PersonalSkills;
