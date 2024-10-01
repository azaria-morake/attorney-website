import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    color: ${({ theme }) => theme.colors.text};
  }
`;

const NavLogo = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLogo>Lawyer Firm</NavLogo>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/consult">Consult</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
