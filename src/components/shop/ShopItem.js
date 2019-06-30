import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
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

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.1em;
`;

const ShopItem = ({ dish, photo }) => (
  <StyledItem>
    {photo && <StyledImage fluid={photo.node.childImageSharp.fluid} />}
    <StyledLink
      to={`/shop/${dish.node.frontmatter.title
        .split(' ')
        .join('')
        .toLowerCase()}`}
    >
      <StyledHeading>{dish.node.frontmatter.title}</StyledHeading>
    </StyledLink>
    <StyledHeading>{dish.node.frontmatter.price}</StyledHeading>
  </StyledItem>
);

ShopItem.propTypes = {
  photo: PropTypes.shape().isRequired,
  dish: PropTypes.shape().isRequired,
};

export default ShopItem;
