import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <Carousel />
      <Section>
        <h2>Welcome to Our Law Firm</h2>
        <InfoText>We provide expert legal advice to help you through life's challenges.</InfoText>
      </Section>
      <Footer>
        <p>&copy; 2024 Lawyer Firm. All rights reserved.</p>
      </Footer>
    </div>
  );
};

export default Home;
