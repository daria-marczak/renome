import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const MenuColumn = styled(StyledColumn)`
  @media (min-width: 1200px) {
    justify-self: end;
  }
`;

const StyledSwitched = styled(StyledColumn)`
  @media (min-width: 1500px) {
    transform: translateX(-200px);
  }

  @media (min-width: 1200px) {
    transform: translateX(-200px);
  }
`;

const Discover = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;

  return (
    <StyledSection title="menu" align>
      <StyledWrapper>
        <StyledSwitched right>
          <PhotoComponent
            firstPhoto={firstPhoto.node}
            secondPhoto={secondPhoto.node}
            flipped
          />
        </StyledSwitched>
        <MenuColumn isDescription left>
          <StyledHeading>discover</StyledHeading>
          <StyledDescription>our restaurant menu</StyledDescription>
          <StyledParagraph>
            In our menu you will find a great variety of delicious food that
            will satisfy the needs and tastes of everyone. We strive to source
            the highest quality ingredients for all of our dishes thereby
            enhancing the quality of services.
          </StyledParagraph>
        </MenuColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

Discover.propTypes = {
  data: PropTypes.shape(
    PropTypes.shape({
      allFile: PropTypes.shape(
        PropTypes.shape({
          edges: PropTypes.array,
        })
      ),
    })
  ),
};

Discover.defaultProps = {
  data: {
    allFile: {
      edges: [],
    },
  },
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/menuSection/" } }) {
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
    render={data => <Discover data={data} {...props} />}
  />
);
