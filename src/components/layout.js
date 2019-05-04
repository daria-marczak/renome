import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './home/Header';
import SEO from './seo';

import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

const Layout = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <GlobalStyles />
      <Header />
    </>
  </ThemeProvider>
);

export default Layout;
