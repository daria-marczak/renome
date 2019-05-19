import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/home/Header';
import About from '../components/home/About';
import LunchOfDay from '../components/home/LunchOfDay';
import MenuSection from '../components/home/Menu';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const IndexPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <StyledWrapper>
      <About data={data} />
    </StyledWrapper>
    <LunchOfDay />
    <StyledWrapper>
      <MenuSection />
    </StyledWrapper>
  </HomeTemplate>
);

export const pageQuery = graphql`
  query {
    aboutHouseOne: file(relativePath: { eq: "images/home/house2.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    aboutHouseTwo: file(relativePath: { eq: "images/home/house1.png" }) {
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
