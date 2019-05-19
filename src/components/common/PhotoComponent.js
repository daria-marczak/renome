import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledImageFirst = styled(Img)`
  max-width: 272px;
  margin-right: 10px;
  position: relative !important;
  transform: translateX(20%);
  z-index: ${({ flipped }) => (flipped ? '1' : '0')};
`;

const StyledImageSecond = styled(Img)`
  max-width: 272px;
  position: relative !important;
  transform: translateY(-30%);
`;

const PhotoComponent = ({ firstPhoto, secondPhoto }) => (
  <StyledWrapper>
    <StyledImageFirst fluid={firstPhoto.childImageSharp.fluid} alt="house" />
    <StyledImageSecond fluid={secondPhoto.childImageSharp.fluid} alt="house" />
  </StyledWrapper>
);

PhotoComponent.propTypes = {
  firstPhoto: PropTypes.shape().isRequired,
  secondPhoto: PropTypes.shape().isRequired,
};

export default PhotoComponent;
