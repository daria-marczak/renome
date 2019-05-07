import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledImageFirst = styled(Img)`
  max-width: 272px;
  margin-right: 10px;
  position: relative !important;
  transform: translateX(20%);
`;

const StyledImageSecond = styled(Img)`
  max-width: 272px;
  position: relative !important;
  transform: translateY(-30%);
`;

const PhotoComponent = ({ data }) => (
  <>
    <StyledImageFirst
      fluid={data.aboutHouseOne.childImageSharp.fluid}
      alt="house"
    />
    <StyledImageSecond
      fluid={data.aboutHouseTwo.childImageSharp.fluid}
      alt="house"
    />
  </>
);

PhotoComponent.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default PhotoComponent;
