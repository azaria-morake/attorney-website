//About.js

import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
  text-align: left;
  border: 1px solid black;
  padding: 20px; 
  border-radius: 10px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.h1`
margin-bottom: 20px;
font-size: 25px;
color: ${({ theme }) => theme.colors.text};
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const SocialMediaLink = styled.a`
    margin: 0 15px;
    color: #333; /* Set your preferred default color */
    font-size: 2rem;
    transition: color 0.3s ease;

    &:hover {
        color: #007bff; /* Change color on hover */
    }
`;

const About = () => {
  return (
  <>
    <AboutSection>
      <Header> About Me </Header>
      <hr/>
      <AboutText>
     
          
          <p> My name is Mpho Matshidiso, and I’m a young attorney passionate about justice and committed to making a difference in both corporate and human rights law. Since graduating from law school, I’ve been working to establish my career, and I’m excited about the journey ahead. </p>
          
          Whether it’s corporate litigation, contract law, or advocating for human rights, I’m driven by a desire to help people and create fair outcomes.

          <p> During my time in university, I balanced academic excellence with hands-on experience, interning at leading law firms and advocacy groups that shaped my approach to legal practice. I’ve always believed in using my skills not just for personal success, but to give back to the community. </p>

                When I’m not working on a case, I enjoy mentoring law students and volunteering with organizations that provide pro bono legal services to underserved communities. As I continue to grow in my career, I’m committed to using my legal expertise to uplift marginalized voices and fight for those who need it most.
       
      </AboutText>

      <SocialMediaContainer>
                <SocialMediaLink href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </SocialMediaLink>
                <SocialMediaLink href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialMediaLink>
                <SocialMediaLink href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialMediaLink>
                <SocialMediaLink href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </SocialMediaLink>
            </SocialMediaContainer>

    </AboutSection>

{ /*<Footer>
<p>&copy; 2024 Mpho Attorneys. All rights reserved.</p>
</Footer> */}
</>
  );
};

export default About;
