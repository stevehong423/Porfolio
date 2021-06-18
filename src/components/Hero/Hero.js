import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey I'm, <br />
        Steve Hong
      </SectionTitle>
      <SectionText>
        I'm a full stack JavaScript software engineer, with a core focus on React/Redux architecture, Node.js, and SQL/NoSQL databases.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/stevehong-swe/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;