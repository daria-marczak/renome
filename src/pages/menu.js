import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import Discover from '../components/menu/Discover';
import Menu from '../components/menu/Menu';
import Footer from '../components/common/Footer';

const IndexPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="Menu" keywords={[`renome`, `restaurant`]} />
    <Header
      photo={data.menuHeader}
      section="menu"
      title="delicious and beautiful"
    />
    <Discover />
    <Menu />
    <Footer />
  </HomeTemplate>
);

export const query = graphql`
  query {
    menuHeader: file(relativePath: { eq: "images/headers/menu.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default IndexPage;
