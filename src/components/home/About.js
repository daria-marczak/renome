import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledHeading = styled.h1`
  letter-spacing: ;
  margin-bottom: -0.3em;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.header};
`;

const StyledDescription = styled.p`
  color: ${({ theme }) => theme.primary};
  line-height: 1;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: 0.1em;
`;

const StyledSection = styled.section`
  margin-top: 70px;
`;

const StyledImageFirst = styled(Img)`
  max-width: 272px;
  margin-right: 10px;
  position: relative !important;
  transform: translateX(20%);
`;

const StyledImageSecond = styled(Img)`
  max-width: 272px;
  position: relative !important;
  transform: translateY(-30%);
`;

const About = ({ data }) => (
  <StyledSection>
    <StyledImageFirst
      fluid={data.aboutHouseOne.childImageSharp.fluid}
      alt="house"
    />
    <StyledImageSecond
      fluid={data.aboutHouseTwo.childImageSharp.fluid}
      alt="house"
    />
    <StyledHeading>about</StyledHeading>
    <StyledDescription>we create delicious memories</StyledDescription>
    <StyledParagraph>
      Renome it is renowned restaurant delights the senses with elegant
      ambiance, gracious service and delectable menus in the heart of
      Manhattan’s. The distinctive setting boasts contemporary furnishings and
      finishes atop the restaurant’s grand modern architecture. Renome offers
      the room for private dining where guests enjoy creative foods and
      sumptuous late night desserts. Is one of the few Manhattan restaurants to
      have a coveted 3-star Michelin rating.
    </StyledParagraph>
  </StyledSection>
);

About.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default About;
