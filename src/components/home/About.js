import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PhotoComponent from '../common/PhotoComponent';
import {
  StyledHeading,
  StyledDescription,
  StyledParagraph,
} from '../common/common';

const StyledSection = styled.section`
  margin-top: 70px;
`;

const About = ({ data }) => (
  <StyledSection>
    <PhotoComponent
      firstPhoto={data.aboutHouseOne}
      secondPhoto={data.aboutHouseTwo}
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
