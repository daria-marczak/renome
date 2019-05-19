import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import PhotoComponent from '../common/PhotoComponent';
import {
  StyledHeading,
  StyledDescription,
  StyledParagraph,
  StyledSection,
  StyledSectionLink,
} from '../common/common';

const About = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;

  return (
    <StyledSection name="about">
      <PhotoComponent
        firstPhoto={firstPhoto.node}
        secondPhoto={secondPhoto.node}
      />
      <StyledHeading>about</StyledHeading>
      <StyledDescription>we create delicious memories</StyledDescription>
      <StyledParagraph>
        Renome it is renowned restaurant delights the senses with elegant
        ambiance, gracious service and delectable menus in the heart of
        Manhattan’s. The distinctive setting boasts contemporary furnishings and
        finishes atop the restaurant’s grand modern architecture. Renome offers
        the room for private dining where guests enjoy creative foods and
        sumptuous late night desserts. Is one of the few Manhattan restaurants
        to have a coveted 3-star Michelin rating.
      </StyledParagraph>
      <StyledSectionLink to="/about">...</StyledSectionLink>
    </StyledSection>
  );
};

About.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/home/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => <About data={data} {...props} />}
  />
);
