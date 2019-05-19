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

const MenuSection = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;

  return (
    <StyledSection name="menu" align>
      <PhotoComponent
        firstPhoto={secondPhoto.node}
        secondPhoto={firstPhoto.node}
        flipped
      />
      <StyledHeading>menu</StyledHeading>
      <StyledDescription>delicious and beautiful</StyledDescription>
      <StyledParagraph>
        In our menu you will find a great variety of delicious food that will
        satisfy the needs and tastes of everyone. We strive to source the
        highest quality ingredients for all of our dishes thereby enhancing the
        quality of services.
      </StyledParagraph>
      <StyledSectionLink to="menu">...</StyledSectionLink>
    </StyledSection>
  );
};

MenuSection.propTypes = {
  data: PropTypes.shape().isRequired,
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
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => <MenuSection data={data} {...props} />}
  />
);
