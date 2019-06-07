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
          />
        </StyledColumn>
        <StyledColumn isDescription>
          <StyledHeading>goals</StyledHeading>
          <StyledDescription>what we want to achieve</StyledDescription>
          <StyledParagraph>
            Our guests come for all occasions – a drink after work, a quick bite
            before a movie, a business dinner and much more. Our goal is to
            satisfy the needs of every visitor to our restaurant every day
            improving the quality of our services.
          </StyledParagraph>
        </StyledColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

History.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/goals/" } }) {
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
