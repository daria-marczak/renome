import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Invalid from '../components/common/404';

const InvalidPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="About" keywords={[`renome`, `restaurant`]} />
    <Invalid
      photo={data.invalidPage}
      section="404"
      title="page was not found"
    />
  </HomeTemplate>
);

export const query = graphql`
  query {
    invalidPage: file(relativePath: { eq: "images/headers/404.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

InvalidPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default InvalidPage;
