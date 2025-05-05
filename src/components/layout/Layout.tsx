import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { theme } from '../../styles/theme';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px; // Header'ın yüksekliği kadar padding
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
  flex: 1;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Main>
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </Main>
  );
};

export default Layout; 