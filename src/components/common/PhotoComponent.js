import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  position: relative;
  z-index: 0;

  @media (min-width: 1200px) {
    max-width: 450px;
    transform: translateX(${({ left }) => (left ? '100px' : '250px')});
  }
`;

const StyledImageFirst = styled(Img)`
  max-width: 272px;
  margin-right: 10px;
  position: 'absolute' !important;
  transform: translateX(${({ switched }) => (switched ? '20%' : '20%')})
    translateY(${({ switched }) => (switched ? '70%' : '0')});
  z-index: ${({ flipped }) => (flipped ? '1' : '0')};

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`;

const StyledImageSecond = styled(Img)`
  max-width: 272px;
  position: relative !important;
  transform: translateY(${({ switched }) => (switched ? '-100%' : '-30%')});

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`;

const PhotoComponent = ({
  firstPhoto,
  secondPhoto,
  flipped,
  switched,
  left,
}) => (
  <StyledWrapper left={left}>
    <StyledImageFirst
      fluid={firstPhoto.childImageSharp.fluid}
      flipped={flipped}
      switched={switched}
      alt={firstPhoto.name}
    />
    <StyledImageSecond
      fluid={secondPhoto.childImageSharp.fluid}
      switched={switched}
      alt={secondPhoto.name}
    />
  </StyledWrapper>
);

PhotoComponent.propTypes = {
  firstPhoto: PropTypes.shape().isRequired,
  secondPhoto: PropTypes.shape().isRequired,
  flipped: PropTypes.bool,
  switched: PropTypes.bool,
  left: PropTypes.bool,
};

PhotoComponent.defaultProps = {
  flipped: false,
  switched: false,
};

export default PhotoComponent;
