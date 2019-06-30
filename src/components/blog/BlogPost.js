import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import PopularPosts from './PopularPosts';
import BlogComments from './BlogComments';
import {
  StyledSection,
  StyledDescription,
  StyledWrapper,
  StyledParagraph,
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

  @media (min-width: 1200px) {
    margin-top: 70px;
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
    margin-bottom: 20px;
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

const StyledTagLink = styled.li`
  text-transform: uppercase;
  color: ${({ theme }) => theme.gray};
  list-style-type: none;
  font-weight: 600;
  flex: 1;

  @media (min-width: 1200px) {
    width: 100px;
  }
`;

const StyledShareLink = styled.a`
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.black};

  @media (min-width: 1200px) {
    margin-left: auto;
  }
`;

const StyledDate = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.gray};
  text-align: center;
`;

const StyledAuthor = styled.p`
  font-weight: 600;
  margin-top: 0;

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

const StyledPostFooter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    text-align: left;
    align-items: center;
  }
`;

const StyledAuthorDescription = styled(StyledParagraph)`
  font-size: 14px;

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  text-align: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    text-align: left;

    & > div {
      margin-left: 20px;
    }
  }
`;

const StyledList = styled.ul`
  width: 100%;
  padding-left: 0;
  display: flex;

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const StyledImage = styled(Img)`
  width: 100px;
  height: auto;

  @media (min-width: 1200px) {
    width: 300px;
    align-self: baseline;
  }
`;

const filterPopularity = blogData => {
  return (
    blogData &&
    blogData.filter(
      item =>
        item.node.frontmatter.isPopular && item.node.frontmatter.type === 'blog'
    )
  );
};

const BlogPost = ({
  post,
  post: { frontmatter: postContent },
  allPosts,
  photos,
  data,
}) => {
  if (!postContent) {
    return <div />;
  }

  return (
    <StyledBlogSection title="blog">
      <StyledBlogWrapper>
        <StyledBlogDescription>
          {postContent && postContent.category}
        </StyledBlogDescription>
        <StyledBlogTitle>{postContent && postContent.title}</StyledBlogTitle>
        <StyledDate>{postContent && postContent.date}</StyledDate>
        <Img
          fluid={
            photos.find(
              edge => edge.node.name === postContent.title.toLowerCase()
            ).node.childImageSharp.fluid
          }
        />
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <StyledPostFooter>
          <StyledList>
            {postContent &&
              postContent.tags.map(tag => (
                <StyledTagLink href="#" key={tag}>
                  {tag}
                </StyledTagLink>
              ))}
          </StyledList>
          <StyledShareLink href="#">Share</StyledShareLink>
        </StyledPostFooter>
        <AuthorSection>
          <StyledImage fluid={data.file.childImageSharp.fluid} alt="" />
          <div>
            <StyledAuthor>{postContent && postContent.author}</StyledAuthor>
            <StyledAuthorDescription>
              {postContent && postContent.aboutAuthor}
            </StyledAuthorDescription>
          </div>
        </AuthorSection>
        <BlogComments />
      </StyledBlogWrapper>
      <StyledAside>
        <section title="Popular posts">
          <StyledSectionHeader>Popular posts</StyledSectionHeader>
          <PopularPosts posts={filterPopularity(allPosts)} photos={photos} />
        </section>
      </StyledAside>
    </StyledBlogSection>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape().isRequired,
  allPosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  data: PropTypes.shape().isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { regex: "/author/" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <BlogPost data={data} {...props} />}
  />
);
