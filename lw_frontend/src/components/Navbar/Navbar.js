import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoWraper = styled.div`
background-color: ${({ theme }) => theme.colors.text};
padding: 10px;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
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

  &:hover {
    background-color: ${({theme}) => theme.colors.text};
    padding: 10px;
    border-radius: 5px;
  }
`;

const NavLogo = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  margin-left: 10x;
  display: flex;
  margin-right: 50px;
 
`;

const Navbar = () => {
  return (
    <Nav>
      <LogoWraper>
        <img src='attorney.jpg' alt='profile pic' style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '10%', marginRight: '10px' }} />
        <div>
    <NavLogo>Mpho Matshidiso</NavLogo>
    <h3 style={{ margin: 0 , fontSize:'15px'}}>Legal Advisor </h3> {/* Set margin to 0 to avoid extra spacing */}
  </div>
      </LogoWraper>
      
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/consult">Consult</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
