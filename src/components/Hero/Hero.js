import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello World! <br />
          Sejam Bem Vindos ao meu Portfolio.
        </SectionTitle>
        <SectionText>
       Me chamo João Gabriel sou Web Designer e Desenvolvedor Front End Freelancer e nas horas vagas apirante a músico.
        </SectionText>
        {/* <Button onClick={props.handleClick} to="/">Saiba Mais</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;