import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import History from '../components/about/History';
import Goals from '../components/about/Goals';
import MoreAbout from '../components/about/MoreAbout';

const AboutPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="About" keywords={[`renome`, `restaurant`]} />
    <Header
      photo={data.aboutHeader}
      section="about"
      title="we create delicious memories"
    />
    <History />
    <Goals />
    <MoreAbout />
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

AboutPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default AboutPage;
