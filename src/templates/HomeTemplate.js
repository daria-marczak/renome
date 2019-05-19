import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import SEO from '../components/seo';

import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

const HomeTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);

HomeTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HomeTemplate;
