import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
`;

const FooterSection = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: ${theme.spacing.md};
  }

  p, a {
    margin-bottom: ${theme.spacing.sm};
    display: block;
    color: ${theme.colors.white};
    opacity: 0.9;
    transition: opacity 0.2s;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledLink = styled(Link)`
  margin-bottom: ${theme.spacing.sm};
  display: block;
  color: ${theme.colors.white};
  opacity: 0.9;
  transition: opacity 0.2s;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Contact</h3>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@pizzaapp.com</p>
          <p>Address: 123 Pizza Street</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <StyledLink to="/menu">Menu</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/locations">Locations</StyledLink>
          <StyledLink to="/careers">Careers</StyledLink>
        </FooterSection>
        <FooterSection>
          <h3>Hours of Operation</h3>
          <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <p>&copy; 2024 Pizza App. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 