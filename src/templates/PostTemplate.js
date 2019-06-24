import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import SEO from '../components/seo';

import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

const PostTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <GlobalStyles />
      <main>{children}</main>
    </>
  </ThemeProvider>
);

PostTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PostTemplate;
