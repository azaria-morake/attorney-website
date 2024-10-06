//Home.js

import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';


const Wrapper = styled.section`
  padding: 4em;
  margin-left: 135px;
  margin-right: 135px;
  background: ${({ theme }) => theme.colors.descrip};
`;

const Section = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  text-align: left;
`;

const TextQuote = styled.p`
text-align: center;
padding: 1rem;
`;

const Home = () => {
  return (
    <div>
      <TextQuote> 
        <p>"Justice is more than a profession—it's a responsibility.</p>
        <p>My purpose is to ensure every voice, no matter how small, is heard."</p>
        <hr/>
      </TextQuote>
      <Carousel />
      <Section>
      { /* <h2>Mpho Matshidiso | Attorney-at-Law</h2> */ }
      </Section>
      
    </div>
  );
};

export default Home;
