import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const LogoWraper = styled.div`


border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;

const NavWraper = styled.div`
background-color: ${({ theme }) => theme.colors.text};
padding: 10px;
border-radius: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
display: flex;
margin-left: 20px;
margin-right: 20px;
margin-top: 10px;
position: sticky;

`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 1rem;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.text};
`;

const NavLogo = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  margin-left: 10x;
  display: flex;
  margin-right: 50px;
  font-weight: 500
 
`;

const H3 = styled.h2`
font-weight: 500;
font-size: 15px;
color: ${({ theme }) => theme.colors.secondary};
`;

const Navbar = () => {
  return (
  
      <NavWraper>
      <LogoWraper>
        <img src='lady-lawyer.jpg' alt='profile pic' style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '10%', marginRight: '10px' }} />
        <div>
        <NavLogo>Mpho Matshidiso</NavLogo>
          <H3><h2 style={{ margin: 0 , fontSize:'15px', fontWeight: '500', color:'#ecf0f1',}}>Legal Advisor </h2> {/* Set margin to 0 to avoid extra spacing */}
          </H3></div>  
      </LogoWraper>
      
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/consult">Consult</NavLink>
      </div>
      </NavWraper>
  
  );
};

export default Navbar;
