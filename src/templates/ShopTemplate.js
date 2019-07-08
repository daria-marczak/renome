import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SEO from '../components/seo';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Header from '../components/common/Header';
import ProductPage from '../components/shop/ProductPage';
import Footer from '../components/common/Footer';
import Snackbar from '../components/common/Snackbar';
import * as appActions from '../appLogic/appActions';

const ShopTemplate = ({
  isSnackBarActive,
  message,
  kind,
  closeMessage,
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
      {isSnackBarActive && (
        <Snackbar
          message={message}
          isActive={isSnackBarActive}
          type={kind}
          closeMessage={closeMessage}
        />
      )}
      <Footer />
    </>
  </ThemeProvider>
);

ShopTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
  message: PropTypes.string,
  kind: PropTypes.string,
  closeMessage: PropTypes.func,
  isSnackBarActive: PropTypes.bool,
};

const mapStateToProps = state => ({
  kind: state.appData.message.kind,
  isSnackBarActive: state.appData.isSnackBarActive,
  message: state.appData.message.content,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      closeMessage: appActions.closeMessage,
    },
    dispatch
  );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopTemplate);
