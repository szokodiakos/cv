import React from 'react';
import { Grid } from 'react-bootstrap';

import About from './About';
import Experience from './Experience';
import Education from './Education';
import PersonalSkills from './PersonalSkills';

const Content = () => (
  <Grid className="cv-body">
    <About />
    <Experience />
    <Education />
    <PersonalSkills />
  </Grid>
);

export default Content;
