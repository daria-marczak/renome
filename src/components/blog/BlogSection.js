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
// import blogData from './blogData';
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

const StyledCategoryLink = styled.li`
  border: none;
  background-color: transparent;
  flex-basis: 50%;
  text-align: left;
  font-weight: 600;
  padding: 10px 0;
  color: ${({ isActive, theme }) => (isActive ? theme.primary : theme.black)};
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const BlogSection = props => {
  const {
    photos: {
      allFile: { edges },
    },
    allPosts: { edges: blogData },
  } = props;
  const [activeCategory, setActive] = useState('all');

  const data =
    activeCategory !== 'all'
      ? blogData.filter(
          data => data.node.frontmatter.category == activeCategory
        )
      : blogData;

  const renderBlog = () => {
    if (activeCategory !== 'all') {
      return data.map(blogPart => (
        <StyledSection
          title={blogPart.node.frontmatter.category}
          key={blogPart.node.id}
        >
          <StyledBlogDescription>
            {blogPart.node.frontmatter.category}
          </StyledBlogDescription>
          <BlogItem
            post={blogPart.node.frontmatter}
            text={blogPart.node.excerpt}
            key={blogPart.id}
            photos={edges}
          />
        </StyledSection>
      ));
    } else {
      return data.map(blogPart => (
        <StyledSection
          title={blogPart.node.frontmatter.category}
          key={blogPart.node.id}
        >
          <StyledBlogDescription>
            {blogPart.node.frontmatter.category}
          </StyledBlogDescription>
          <BlogItem
            post={blogPart.node.frontmatter}
            text={blogPart.node.excerpt}
            key={blogPart.id}
            photos={edges}
          />
        </StyledSection>
      ));
    }
  };

  const setCategory = category => {
    const chosenCategory = activeCategory === category ? 'all' : category;
    const headerHeight = document.querySelector('header');
    const height =
      document.querySelector('section[title="blog"]').offsetHeight -
      headerHeight;

    setActive(chosenCategory);
    window.scrollTo({
      top: -height,
      behavior: 'smooth',
    });
  };

  const filterPopularity = blogData => {
    return blogData && blogData.filter(item => item.node.frontmatter.isPopular);
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
                key={blogPart.node.id}
                onClick={() => setCategory(blogPart.node.frontmatter.category)}
                isActive={activeCategory === blogPart.node.frontmatter.category}
              >
                {blogPart.node.frontmatter.category}
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
  photos: PropTypes.shape().isRequired,
  allPosts: PropTypes.shape().isRequired,
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
