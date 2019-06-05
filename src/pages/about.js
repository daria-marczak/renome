import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';

const IndexPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="About" keywords={[`renome`, `restaurant`]} />
    <Header
      photo={data.aboutHeader}
      section="about"
      title="we create delicious memories"
    />
  </HomeTemplate>
);

export const query = graphql`
  query {
    aboutHeader: file(relativePath: { eq: "images/headers/about.png" }) {
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
