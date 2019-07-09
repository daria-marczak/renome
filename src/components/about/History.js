import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import PhotoComponent from '../common/PhotoComponent';
import {
  StyledHeading,
  StyledDescription,
  StyledParagraph,
  StyledSection,
  StyledWrapper,
  StyledColumn,
} from '../common/common';

const History = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;
  return (
    <StyledSection title="history">
      <StyledWrapper>
        <StyledColumn>
          <PhotoComponent
            firstPhoto={firstPhoto.node}
            secondPhoto={secondPhoto.node}
            left
          />
        </StyledColumn>
        <StyledColumn isDescription>
          <StyledHeading>history</StyledHeading>
          <StyledDescription>wonderful story of our town</StyledDescription>
          <StyledParagraph>
            Renome it is renowned restaurant delights the senses with elegant
            ambiance, gracious service and delectable menus in the heart of
            Manhattan’s. The distinctive setting boasts contemporary furnishings
            and finishes atop the restaurant’s grand modern architecture. Renome
            offers the room for private dining where guests enjoy creative foods
            and sumptuous late night desserts. Is one of the few Manhattan
            restaurants to have a coveted 3-star Michelin rating.
          </StyledParagraph>
        </StyledColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

History.propTypes = {
  data: PropTypes.shape(
    PropTypes.shape({
      allFile: PropTypes.shape(
        PropTypes.shape({
          edges: PropTypes.array,
        })
      ),
    })
  ).isRequired,
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
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => <History data={data} {...props} />}
  />
);
