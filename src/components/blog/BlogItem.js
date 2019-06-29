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
  color: ${({ theme }) => theme.gray};
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.1em;
`;

const BlogItem = ({ post, photos, text }) => {
  const photo = photos.find(
    edge => edge.node.name === post.title.toLowerCase()
  );
  return (
    <StyledArticle key={post.title}>
      <StyledHeading>{post.title}</StyledHeading>
      <StyledBlogDescription>{post.date}</StyledBlogDescription>
      <Img
        fixed={typeof window === 'undefined' ? { src: {} } : undefined}
        fluid={photo.node.childImageSharp.fluid}
        alt=""
      />
      <StyledParagraph>{text}</StyledParagraph>
      <StyledLink
        to={`/blog/${post.title
          .split(' ')
          .join('')
          .toLowerCase()}`}
      >
        Continue reading...
      </StyledLink>
    </StyledArticle>
  );
};

BlogItem.propTypes = {
  text: PropTypes.string.isRequired,
  post: PropTypes.shape().isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default BlogItem;
