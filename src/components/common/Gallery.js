import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-bottom: 120px;

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`;

const StyledImage = styled(Img)`
  margin-right: 10px;
  position: 'absolute' !important;
  margin-bottom: -100px;

  @media (min-width: 1200px) {
    max-width: 450px;
  }

  &:hover {
    z-index: 99;
    cursor: pointer;
  }
`;

const PhotoComponent = ({ photos, flipped, switched }) => (
  <StyledWrapper>
    {photos.map(photo => (
      <StyledImage
        fluid={photo.node.childImageSharp.fluid}
        flipped={flipped}
        switched={switched}
        alt={photo.node.name}
        key={photo.node.id}
      />
    ))}
  </StyledWrapper>
);

PhotoComponent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape()]))
    .isRequired,
  flipped: PropTypes.bool,
  switched: PropTypes.bool,
};

PhotoComponent.defaultProps = {
  flipped: false,
  switched: false,
};

export default PhotoComponent;
