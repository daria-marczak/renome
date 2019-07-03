import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import CheckoutSection from '../components/checkout/CheckoutSection';
import Footer from '../components/common/Footer';

const Checkout = ({ data }) => (
  <HomeTemplate>
    <SEO title="Checkout" keywords={[`renome`, `restaurant`]} />
    <Header photo={data.menuHeader} section="checkout" title="our products" />
    <CheckoutSection />
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

    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            category
            type
            id
            price
          }
        }
      }
    }
  }
`;

Checkout.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Checkout;
