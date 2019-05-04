import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import GlobalStyles from '../assets/styles/GlobalStyles';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <GlobalStyles />
  </Layout>
);

export default IndexPage;
