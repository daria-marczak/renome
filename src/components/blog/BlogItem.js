import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledDescription, StyledParagraph } from '../common/common';

const StyledArticle = styled.article`
  text-align: left;
`;

const StyledHeading = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const StyledBlogDescription = styled(StyledDescription)`
  color: #bbbdbf;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.1em;
`;

const BlogItem = ({ post, photos }) => (
  <StyledArticle key={post.title}>
    <StyledHeading>{post.title}</StyledHeading>
    <StyledBlogDescription>{post.date}</StyledBlogDescription>
    <Img
      fluid={
        photos.find(edge => edge.node.name === post.title).node.childImageSharp
          .fluid
      }
    />
    <StyledParagraph>{post.text}</StyledParagraph>
    <StyledLink to={`/blog/${post.title.split(' ').join('')}`}>
      Continue reading...
    </StyledLink>
  </StyledArticle>
);

BlogItem.propTypes = {
  post: PropTypes.shape().isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default BlogItem;
