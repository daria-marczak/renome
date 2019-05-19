import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  position: relative;
  z-index: 0;
`;

const StyledImageFirst = styled(Img)`
  max-width: 272px;
  margin-right: 10px;
  position: 'absolute' !important;
  transform: translateX(20%);
  z-index: ${({ flipped }) => (flipped ? '1' : '0')};
`;

const StyledImageSecond = styled(Img)`
  max-width: 272px;
  position: relative !important;
  transform: translateY(-30%);
`;

const PhotoComponent = ({ firstPhoto, secondPhoto, flipped }) => (
  <StyledWrapper>
    <StyledImageFirst
      fluid={firstPhoto.childImageSharp.fluid}
      flipped={flipped}
      alt={firstPhoto.name}
    />
    <StyledImageSecond
      fluid={secondPhoto.childImageSharp.fluid}
      alt={secondPhoto.name}
    />
  </StyledWrapper>
);

PhotoComponent.propTypes = {
  firstPhoto: PropTypes.shape().isRequired,
  secondPhoto: PropTypes.shape().isRequired,
  flipped: PropTypes.bool,
};

PhotoComponent.defaultProps = {
  flipped: false,
};

export default PhotoComponent;
