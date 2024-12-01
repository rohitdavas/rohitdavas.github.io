import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.primary};
  padding: 1rem 0;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.heading};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.link};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 250px;
    background-color: ${({ theme }) => theme.primary};
    flex-direction: column;
    padding: 2rem;
    transition: right 0.3s ease;
    box-shadow: -2px 0 4px ${({ theme }) => theme.shadow};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, active }) => (active ? theme.link : theme.text)};
  text-decoration: none;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.link};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.link};
    &:after {
      width: 100%;
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.link};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: ${({ theme }) => theme.link};
  }
`;

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/" onClick={closeMenu}>
          Rohit Kumar
        </Logo>
        <MenuButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink 
            to="/" 
            active={location.pathname === '/'} 
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/timeline" 
            active={location.pathname === '/timeline'} 
            onClick={closeMenu}
          >
            Timeline
          </NavLink>
          <NavLink 
            to="/projects" 
            active={location.pathname === '/projects'} 
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            active={location.pathname === '/contact'} 
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <ThemeToggle onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </ThemeToggle>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;
