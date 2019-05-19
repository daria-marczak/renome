import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import PhotoComponent from '../common/PhotoComponent';

const StyledMenu = styled.section`
  margin-top: 70px;
`;

const MenuSection = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;

  return (
    <StyledMenu name="menu">
      <PhotoComponent
        firstPhoto={secondPhoto.node}
        secondPhoto={firstPhoto.node}
        flipped
      />
    </StyledMenu>
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
