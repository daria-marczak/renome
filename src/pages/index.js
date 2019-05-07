import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/home/Header';
import About from '../components/home/About';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 95%;
`;

const IndexPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <StyledWrapper>
      <About data={data} />
    </StyledWrapper>
  </HomeTemplate>
);

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/home/house1.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "images/home/house2.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
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
