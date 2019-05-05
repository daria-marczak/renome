import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from './home/Header';
import About from './home/About';
import SEO from './seo';

import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 95%;
`;

const Layout = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <GlobalStyles />
      <Header />
      <StyledWrapper>
        <About />
      </StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;
