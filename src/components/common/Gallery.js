import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-bottom: 120px;
`;

const StyledImage = styled(Img)`
  margin-right: 10px;
  margin-bottom: -100px;

  @media (min-width: 1200px) {
    max-width: 450px;
    margin-bottom: 0;
    margin-left: -30px;
    transform: translateY(${({ index }) => index * '-309' + 'px'})
      translateX(${({ index }) => index * '20' + '%'});
  }

  &:hover {
    z-index: 99;
    cursor: pointer;
  }
`;

const PhotoComponent = ({ photos }) => (
  <StyledWrapper>
    {photos.map((photo, index) => (
      <StyledImage
        fluid={photo.node.childImageSharp.fluid}
        alt={photo.node.name}
        index={index}
        key={photo.node.id}
      />
    ))}
  </StyledWrapper>
);

PhotoComponent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape()]))
    .isRequired,
};

export default PhotoComponent;
