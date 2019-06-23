import React from 'react';
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

const StyledBlogDescription = styled(StyledDescription)`
  text-transform: uppercase;
  text-align: center;
`;

const BlogSection = ({
  photos: {
    allFile: { edges },
  },
}) => (
  <StyledSection title="blog">
    <StyledWrapper>
      {blogData.map(blogPart => (
        <StyledSection title={blogPart.category} key={blogPart.category}>
          <StyledBlogDescription>{blogPart.category}</StyledBlogDescription>
          {blogPart.posts.map(post => (
            <BlogItem post={post} key={post.title} photos={edges} />
          ))}
        </StyledSection>
      ))}
    </StyledWrapper>
  </StyledSection>
);

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
