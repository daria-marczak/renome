import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Header from '../components/common/Header';
import ProductPage from '../components/shop/ProductPage';
import Footer from '../components/common/Footer';

const ShopTemplate = ({
  data: { markdownRemark: product, allFile, shopHeader },
}) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO
        title={product.frontmatter.title}
        keywords={[`renome`, `restaurant`, `food`]}
      />
      <Header photo={shopHeader} section="shop" title="order dishes online" />
      <GlobalStyles />
      <main>
        <ProductPage
          product={product}
          photo={
            allFile.edges.find(
              edge =>
                edge.node.name.toLowerCase() ===
                product.frontmatter.title.toLowerCase()
            ).node
          }
        />
      </main>
      <Footer />
    </>
  </ThemeProvider>
);

ShopTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        id
        type
        stars
        customers
        category
        price
        description
      }
    }

    shopHeader: file(relativePath: { eq: "images/headers/shop.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    allFile(filter: { absolutePath: { regex: "/shop/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default ShopTemplate;
