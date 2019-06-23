import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import BlogItem from './BlogItem';
import {
  StyledDescription,
  StyledSection,
  StyledWrapper,
} from '../common/common';
import blogData from './blogData';
import PopularPosts from './PopularPosts';

const StyledBlogDescription = styled(StyledDescription)`
  text-transform: uppercase;
  text-align: center;
`;

const StyledSectionHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
`;

const StyledAsideWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
`;

const StyledBlogWrapper = styled(StyledWrapper)`
  @media (min-width: 1200px) {
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

const StyledCategoryLink = styled.li`
  border: none;
  background: transparent;
  flex-basis: 50%;
  text-align: left;
  font-weight: 600;
  padding: 10px 0;
  color: ${({ isActive, theme }) => (isActive ? theme.primary : theme.black)};
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const BlogSection = ({
  photos: {
    allFile: { edges },
  },
}) => {
  const [activeCategory, setActive] = useState('all');

  const renderBlog = () => {
    if (activeCategory !== 'all') {
      return blogData
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
      return blogData.map(blogPart => (
        <StyledSection title={blogPart.category} key={blogPart.category}>
          <StyledBlogDescription>{blogPart.category}</StyledBlogDescription>
          {blogPart.posts.map(post => (
            <BlogItem post={post} key={post.title} photos={edges} />
          ))}
        </StyledSection>
      ));
    }
  };

  const setCategory = category => {
    if (activeCategory === category) {
      setActive('all');
    } else {
      setActive(category);
    }
  };

  const filterPopularity = blogData => {
    return blogData
      .map(category => category.posts.filter(post => post.isPopular))
      .flat();
  };

  return (
    <StyledBlogSection title="blog">
      <StyledBlogWrapper>{renderBlog()}</StyledBlogWrapper>
      <StyledAside>
        <section title="Category choice">
          <StyledSectionHeader>Categories</StyledSectionHeader>
          <StyledAsideWrapper>
            {blogData.map(blogPart => (
              <StyledCategoryLink
                key={blogPart.category}
                onClick={() => setCategory(blogPart.category)}
                isActive={activeCategory === blogPart.category}
              >
                {blogPart.category}
              </StyledCategoryLink>
            ))}
          </StyledAsideWrapper>
        </section>
        <section title="Popular posts">
          <StyledSectionHeader>Popular posts</StyledSectionHeader>
          <PopularPosts posts={filterPopularity(blogData)} photos={edges} />
        </section>
      </StyledAside>
    </StyledBlogSection>
  );
};

BlogSection.propTypes = {
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

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/blogSection/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogSection photos={data} {...props} />}
  />
);
