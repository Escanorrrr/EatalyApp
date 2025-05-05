import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import LogoImage from '../../assets/images/icons/LogoCafe.png';

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${props => props.isScrolled ? '0.2rem 2rem' : '0.3rem'};
  background-color: white;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${props => props.isScrolled ? '0 1px 5px rgba(0,0,0,0.1)' : 'none'};
`;

const Nav = styled.nav<{ isScrolled: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.isScrolled ? 'row' : 'column'};
  align-items: center;
  justify-content: center;
  gap: ${props => props.isScrolled ? '0' : '0.3rem'};
`;

const Logo = styled(Link)<{ isScrolled: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  margin: ${props => props.isScrolled ? '0' : '0.2rem 0'};

  img {
    width: ${props => props.isScrolled ? '60px' : '140px'};
    height: auto;
    transition: all 0.3s ease;
  }
`;

const NavLinks = styled.div<{ isScrolled: boolean }>`
  display: flex;
  gap: ${props => props.isScrolled ? '2rem' : '1.5rem'};
  align-items: center;
  opacity: ${props => props.isScrolled ? '1' : '0'};
  visibility: ${props => props.isScrolled ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  margin-left: ${props => props.isScrolled ? 'auto' : '0'};
`;

const NavLink = styled(Link)<{ isScrolled?: boolean }>`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary}10;
  }
`;

const OrderButton = styled(Link)<{ isScrolled: boolean }>`
  background-color: #4a6741;
  color: white !important;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 1rem;
  
  &:hover {
    background-color: #3d5635;
    transform: translateY(-2px);
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav isScrolled={isScrolled}>
        <Logo to="/" isScrolled={isScrolled}>
          <img src={LogoImage} alt="Cafe Eataly Logo" />
        </Logo>
        <NavLinks isScrolled={isScrolled}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <OrderButton to="/order" isScrolled={isScrolled}>
            ORDER ONLINE
          </OrderButton>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 