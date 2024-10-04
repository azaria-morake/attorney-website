import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';


const Wrapper = styled.section`
  padding: 4em;
  margin-left: 135px;
  margin-right: 135px;
  background: papayawhip;
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
      <h2>Mpho Matshidiso | Attorney-at-Law</h2>
      <Wrapper>
        <InfoText>
          
          <p> My name is Mpho Matshidiso, and I’m a young attorney passionate about justice and committed to making a difference in both corporate and human rights law. Since graduating from law school, I’ve been working to establish my career, and I’m excited about the journey ahead. </p>
          
          <p>Whether it’s corporate litigation, contract law, or advocating for human rights, I’m driven by a desire to help people and create fair outcomes. </p>

          <p> During my time in university, I balanced academic excellence with hands-on experience, interning at leading law firms and advocacy groups that shaped my approach to legal practice. I’ve always believed in using my skills not just for personal success, but to give back to the community. </p>

                When I’m not working on a case, I enjoy mentoring law students and volunteering with organizations that provide pro bono legal services to underserved communities. As I continue to grow in my career, I’m committed to using my legal expertise to uplift marginalized voices and fight for those who need it most.
        </InfoText>

      </Wrapper>
      </Section>
      <Footer>
        <p>&copy; 2024 Mpho Attorneys. All rights reserved.</p>
      </Footer>
    </div>
  );
};

export default Home;
