import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledItem = styled.li`
  list-style-type: none;
  justify-self: center;
`;

const StyledHeading = styled.h3`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
`;

const StyledImage = styled(Img)`
  width: 300px;
  height: 300px;
`;

const ShopItem = ({ dish, photo }) => (
  <StyledItem>
    {photo && <StyledImage fluid={photo.node.childImageSharp.fluid} />}
    <StyledHeading>{dish.name}</StyledHeading>
    <StyledHeading>{dish.price}</StyledHeading>
  </StyledItem>
);

ShopItem.propTypes = {
  photo: PropTypes.shape().isRequired,
  dish: PropTypes.shape().isRequired,
};

export default ShopItem;
