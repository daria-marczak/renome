import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import ShopSection from '../components/shop/ShopSection';
import Footer from '../components/common/Footer';

const ShopPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="Shop" keywords={[`renome`, `restaurant`]} />
    <Header
      photo={data.menuHeader}
      section="shop"
      title="order dishes online"
    />
    <ShopSection />
    <Footer />
  </HomeTemplate>
);

export const query = graphql`
  query {
    menuHeader: file(relativePath: { eq: "images/headers/shop.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

ShopPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default ShopPage;
