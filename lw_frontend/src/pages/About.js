import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const AboutText = styled.p`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const About = () => {
  return (
    <AboutSection>
      <h1>About Us</h1>
      <AboutText>
        Our law firm specializes in various fields of law, including family law, business law, and criminal defense.
        With over 20 years of experience, our dedicated team provides personalized legal solutions for each client.
      </AboutText>
    </AboutSection>
  );
};

export default About;
