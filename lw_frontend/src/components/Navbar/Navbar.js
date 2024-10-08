import React, { useState } from 'react';
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
margin-left: 20px;
margin-right: 20px;
margin-top: 10px;
position: sticky;

`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    border-radius: 10px;
    margin-top: 12.5px;
  }
`;

// Menu items
const MenuItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
  }
`;

// Menu links
const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-size: 1.2rem;
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
const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${ ({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    margin-right: 40px;
    margin-left: 20px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
  <>
  
      <NavWraper>
      
      <LogoWraper>

      <BurgerIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={open ? faTimes : faBars} />
      </BurgerIcon>
        <img src='lady-lawyer.jpg' alt='profile pic' style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '10%', marginRight: '10px' }} />
        <div>
        <NavLogo>Mpho Matshidiso</NavLogo>
          <H3><h2 style={{ margin: 0 , fontSize:'15px', fontWeight: '500', color:'#ecf0f1',}}>Legal Advisor </h2> {/* Set margin to 0 to avoid extra spacing */}
          </H3></div>  
      </LogoWraper>
      
      
      <Menu open={open}>
      
        <MenuItem>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/about">About</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/consult">Consult</NavLink>
        </MenuItem>
      
      </Menu>
      </NavWraper>
      </>
  
  );
};

export default Navbar;
