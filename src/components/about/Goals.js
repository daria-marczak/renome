import React from 'react';
import styled from 'styled-components';
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

const GoalsColumn = styled(StyledColumn)`
  @media (min-width: 1200px) {
    justify-self: end;
  }
`;

const Goals = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;
  return (
    <StyledSection title="goals">
      <StyledWrapper>
        <StyledColumn right>
          <PhotoComponent
            firstPhoto={firstPhoto.node}
            secondPhoto={secondPhoto.node}
          />
        </StyledColumn>
        <GoalsColumn left isDescription>
          <StyledHeading>goals</StyledHeading>
          <StyledDescription>what we want to achieve</StyledDescription>
          <StyledParagraph>
            Our guests come for all occasions – a drink after work, a quick bite
            before a movie, a business dinner and much more. Our goal is to
            satisfy the needs of every visitor to our restaurant every day
            improving the quality of our services.
          </StyledParagraph>
        </GoalsColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

Goals.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      allFile: PropTypes.objectOf(
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
    render={data => <Goals data={data} {...props} />}
  />
);
