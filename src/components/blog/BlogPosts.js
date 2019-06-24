import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlogItem from './BlogItem';
import { StyledSection, StyledDescription } from '../common/common';

const StyledBlogDescription = styled(StyledDescription)`
  text-transform: uppercase;
  text-align: center;
`;

const BlogPost = ({ posts, activeCategory, edges }) => {
  if (activeCategory !== 'all') {
    return posts
      .filter(data => data.category === activeCategory)
      .map(blogPart => (
        <StyledSection title={blogPart.category} key={blogPart.category}>
          <StyledBlogDescription>{blogPart.category}</StyledBlogDescription>
          {blogPart.posts.map(post => (
            <BlogItem post={post} key={post.title} photos={edges} />
          ))}
        </StyledSection>
      ));
  } else {
    return posts.map(blogPart => (
      <StyledSection title={blogPart.category} key={blogPart.category}>
        <StyledBlogDescription>{blogPart.category}</StyledBlogDescription>
        {blogPart.posts.map(post => (
          <BlogItem post={post} key={post.title} photos={edges} />
        ))}
      </StyledSection>
    ));
  }
};

BlogPost.propTypes = {
  photos: PropTypes.objectOf(
    PropTypes.shape({
      allFile: PropTypes.objectOf(
        PropTypes.shape({
          edges: PropTypes.array,
        })
      ),
    })
  ).isRequired,
};

export default BlogPost;
