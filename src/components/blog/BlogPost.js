import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PopularPosts from './PopularPosts';
import {
  StyledSection,
  StyledDescription,
  StyledWrapper,
} from '../common/common';

const StyledBlogDescription = styled(StyledDescription)`
  text-transform: uppercase;
  text-align: center;
`;

const StyledBlogTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
`;

const StyledSectionHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
`;

const StyledBlogWrapper = styled(StyledWrapper)`
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledBlogSection = styled(StyledSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }
`;

const StyledAside = styled.aside`
  margin: 0 auto;
  width: 90%;

  @media (min-width: 1200px) {
    margin-top: 70px;
    margin-left: 100px;
    width: 50%;
  }
`;

const StyledDate = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.gray};
  text-align: center;
`;

const filterPopularity = blogData => {
  return blogData && blogData.filter(item => item.node.frontmatter.isPopular);
};

const BlogPost = ({
  post: { frontmatter: postContent },
  allPosts: { edges: allPostsContent },
  photos,
}) => {
  return (
    <StyledBlogSection title="blog">
      <StyledBlogWrapper>
        <StyledBlogDescription>{postContent.category}</StyledBlogDescription>
        <StyledBlogTitle>{postContent.title}</StyledBlogTitle>
        <StyledDate>{postContent.date}</StyledDate>
        <Img
          fluid={
            photos.find(
              edge => edge.node.name === postContent.title.toLowerCase()
            ).node.childImageSharp.fluid
          }
        />
      </StyledBlogWrapper>
      <StyledAside>
        <section title="Popular posts">
          <StyledSectionHeader>Popular posts</StyledSectionHeader>
          <PopularPosts
            posts={filterPopularity(allPostsContent)}
            photos={photos}
          />
        </section>
      </StyledAside>
    </StyledBlogSection>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape().isRequired,
  allPosts: PropTypes.shape().isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default BlogPost;
