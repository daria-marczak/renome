import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledHero = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 60vh;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`;

const BackgroundImage = ({ photo }) => {
  return <StyledHero fluid={photo.childImageSharp.fluid} role="presentation" />;
};

BackgroundImage.propTypes = {
  photo: PropTypes.shape().isRequired,
};

export default BackgroundImage;
