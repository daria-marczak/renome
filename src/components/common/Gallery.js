import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  position: relative;
  z-index: 0;

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`;

const StyledImage = styled(Img)`
  margin-right: 10px;
  position: 'absolute' !important;
  margin-bottom: 10px;

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`;

const PhotoComponent = ({ photos, flipped, switched }) => (
  <StyledWrapper>
    {photos.map(photo => (
      <StyledImage
        fluid={photo.node.childImageSharp.fluid}
        flipped={flipped}
        switched={switched}
        alt={photo.name}
        key={photo.node.id}
      />
    ))}
  </StyledWrapper>
);

PhotoComponent.propTypes = {
  photos: PropTypes.shape().isRequired,
  flipped: PropTypes.bool,
  switched: PropTypes.bool,
};

PhotoComponent.defaultProps = {
  flipped: false,
  switched: false,
};

export default PhotoComponent;
