import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import CartSection from '../components/cart/CartSection';

const Cart = ({ data }) => (
  <HomeTemplate>
    <SEO title="Cart" keywords={[`renome`, `restaurant`]} />
    <Header photo={data.menuHeader} section="your" title="shopping cart" />
    <CartSection allProducts={data.allMarkdownRemark.edges} />
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

Cart.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Cart;
